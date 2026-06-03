import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../tokens";
import { GridBackground } from "../components/GridBackground";

const PROBLEMS = [
  { icon: "⚙️", text: "Trop de tâches manuelles" },
  { icon: "📊", text: "Pas de visibilité sur les données" },
  { icon: "🐢", text: "Onboarding trop lent" },
];

const ProblemCard: React.FC<{ icon: string; text: string; delay: number }> = ({ icon, text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const x = interpolate(frame, [delay, delay + 20], [-80, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      opacity,
      transform: `translateX(${x}px)`,
      display: "flex",
      alignItems: "center",
      gap: 28,
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.blue}40`,
      borderLeft: `3px solid ${COLORS.blue}`,
      borderRadius: 12,
      padding: "28px 40px",
      marginBottom: 20,
      boxShadow: `0 0 30px ${COLORS.blueGlow}`,
    }}>
      <span style={{ fontSize: 40 }}>{icon}</span>
      <span style={{ fontFamily: FONT, fontSize: 32, color: COLORS.white, fontWeight: 500 }}>{text}</span>
    </div>
  );
};

export const Scene2Problemes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({ frame: frame - 5, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.bg, justifyContent: "center", alignItems: "center" }}>
      <GridBackground opacity={0.05} />

      <div style={{ width: 900, zIndex: 1 }}>
        <p style={{
          fontFamily: FONT,
          fontSize: 20,
          color: COLORS.blue,
          textTransform: "uppercase",
          letterSpacing: "4px",
          margin: "0 0 16px 4px",
          opacity: titleOpacity,
        }}>
          Le constat
        </p>
        <h2 style={{
          fontFamily: FONT,
          fontSize: 52,
          fontWeight: 700,
          color: COLORS.white,
          margin: "0 0 48px",
          opacity: titleOpacity,
        }}>
          Vos vrais problèmes
        </h2>

        {PROBLEMS.map((p, i) => (
          <ProblemCard key={i} icon={p.icon} text={p.text} delay={25 + i * 20} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
