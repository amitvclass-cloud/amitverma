import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ClientPhotosSection({ onOpenBooking }) {
  const photoGallery = [
    { id: "photo-1", name: "Rajesh Kumar" },
    { id: "photo-2", name: "Ananya Sharma" },
    { id: "photo-3", name: "Vikas Malhotra" },
    { id: "photo-4", name: "Siddharth Rao" },
    { id: "photo-5", name: "Priya Nair" },
    { id: "photo-6", name: "Karan Mehta" }
  ];

  return (
    <section id="results" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)" }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-tag">CLIENT TRANSFORMATION GALLERY</span>
          <h2 className="section-title">
            Real People, <span className="text-gradient">Visual Proof</span>
          </h2>
        </div>

        {/* Horizontal Scroll Photo Strip */}
        <div className="client-photo-scroll">
          {photoGallery.map((item) => (
            <div key={item.id} className="client-photo-card glass-card">
              {/* Photo Placeholder */}
              <div className="client-photo-frame" />

              {/* Name + Verified Tag Only */}
              <div className="client-photo-caption">
                <span className="client-photo-name">{item.name}</span>
                <span className="client-photo-verified">
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
          >
            Start Your Own Transformation — Book a Session
          </button>
        </div>

      </div>

      <style>{`
        .client-photo-scroll {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 0.75rem;
        }
        .client-photo-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .client-photo-card {
          flex: 0 0 auto;
          width: 220px;
          scroll-snap-align: start;
          padding: 0.75rem;
          border-radius: 18px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .client-photo-frame {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(255, 122, 0, 0.1) 0%, #0B0B0D 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .client-photo-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0.25rem 0.25rem;
          font-size: 0.85rem;
        }
        .client-photo-name {
          color: #F5F5F5;
          font-weight: 700;
        }
        .client-photo-verified {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #25D366;
          font-weight: 600;
          font-size: 0.72rem;
        }
        @media (max-width: 480px) {
          .client-photo-card {
            width: 78vw;
          }
        }
      `}</style>
    </section>
  );
}
