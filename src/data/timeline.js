// Full journey timeline — used only on the dedicated /my-story page.
import { Briefcase, AlertTriangle, Sparkles, Trophy, Users } from "lucide-react";

export const timelineSteps = [
  {
    year: "2002",
    title: "The Corporate Grind Begins",
    desc: "Stepped into the high-pressure world of IT & engineering. Long hours, desk work, and late-night meals slowly became the norm.",
    highlight: "20 Years in Corporate IT",
    icon: Briefcase
  },
  {
    year: "2015",
    title: "Hitting 110kg — The Wake-Up Call",
    desc: "Years of stress-eating and zero movement caught up. Drained of energy, low on sleep, and realizing corporate success meant nothing without health.",
    highlight: "Peak Weight: 110 kg",
    icon: AlertTriangle
  },
  {
    year: "2021",
    title: "The Awakening",
    desc: "Decided to engineer a sustainable system instead of chasing extreme diets or gym burnout — built around real corporate schedules and 'Radhe Radhe' daily discipline.",
    highlight: "No-Gym System Built From Scratch",
    icon: Sparkles
  },
  {
    year: "2022",
    title: "80kg & Reborn",
    desc: "Completed a 30kg transformation in 10 months — without a single gym session or starvation diet. Energy, focus, and confidence back at their peak.",
    highlight: "30 kg Lost in 10 Months",
    icon: Trophy
  },
  {
    year: "2023 — Present",
    title: "Coaching Hundreds of Busy Professionals",
    desc: "Turned the exact system into a coaching practice, helping corporate leaders and founders replicate the same results around their own demanding schedules.",
    highlight: "100+ Real Transformations",
    icon: Users
  }
];
