/**
 * Fetches live config (next_batch_date, booking_status, zoom_link, support_phone) from the
 * Google Sheet Apps Script Web App. Last-known value is cached in localStorage so the site
 * paints real data immediately on load instead of a placeholder, then revalidates in the
 * background (stale-while-revalidate). Falls back to null if VITE_SHEET_API_URL isn't set.
 */
import { useState, useEffect, useCallback } from "react";

const CACHE_MS = 45000; // 45s in-memory cache between calls in the same tab
const STORAGE_KEY = "avc_site_config_v1";
let memCache = null; // { data, fetchedAt }

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeStored(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage unavailable — non-fatal, just skip the instant-paint optimization
  }
}

async function fetchConfig(force) {
  const url = import.meta.env.VITE_SHEET_API_URL;
  if (!url) return null;

  if (!force && memCache && Date.now() - memCache.fetchedAt < CACHE_MS) {
    return memCache.data;
  }

  try {
    const res = await fetch(`${url}?action=config`);
    const data = await res.json();
    memCache = { data, fetchedAt: Date.now() };
    writeStored(data);
    return data;
  } catch (err) {
    console.warn("Could not fetch live site config, using static fallback:", err);
    return null;
  }
}

// Sheet stores a plain 10-digit number (e.g. "9876543210") — wa.me needs country code.
export function formatWhatsAppNumber(supportPhone) {
  if (!supportPhone) return null;
  const digits = String(supportPhone).replace(/\D/g, "");
  if (!digits) return null;
  return digits.startsWith("91") ? digits : `91${digits}`;
}

export function useSiteConfig() {
  const [config, setConfig] = useState(memCache?.data || readStored());

  const load = useCallback((force = false) => {
    fetchConfig(force).then((data) => {
      if (data) setConfig(data);
    });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { config, refresh: () => load(true) };
}
