import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../tokens";
import { GridBackground } from "../components/GridBackground";

const STATS = [
  { value: "3×", label: "Plus rapide", delay: 20 },
  { value: "-40%", label: "De coûts", delay: 40 },
  { value: "300", label: "Clients accompagnés", delay: 60 },
];

const StatCard: React.FC<typeof STATS[0]> = ({ value, label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const y = interpolate(frame, [delay, delay + 25], [50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      opacity,
      transform: `translateY(${y}px)`,
      textAlign: "center",
      flex: 1,
      padding: "40px 20px",
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.blue}40`,
      borderTop: `3px solid ${COLORS.blue}`,
      borderRadius: 16,
      margin: "0 12px",
      boxShadow: `0 8px 40px ${COLORS.blueGlow}`,
    }}>
      <div style={{
        fontFamily: FONT,
        fontSize: 80,
        fontWeight: 800,
        color: COLORS.blue,
        lineHeight: 1,
        textShadow: `0 0 40px ${COLORS.blue}`,
        letterSpacing: "-2px",
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: FONT,
        fontSize: 22,
        color: COLORS.gray,
        marginTop: 12,
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}>
        {label}
      </div>
    </div>
  );
};

export const Scene4Resultats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({ frame: frame - 5, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.bg, justifyContent: "center", alignItems: "center" }}>
      <GridBackground opacity={0.05} />

      <div style={{ width: 1100, zIndex: 1 }}>
        <p style={{
          fontFamily: FONT,
          fontSize: 20,
          color: COLORS.blue,
          textTransform: "uppercase",
          letterSpacing: "4px",
          margin: "0 0 16px 4px",
          opacity: titleOpacity,
          textAlign: "center",
        }}>
          Les résultats
        </p>
        <h2 style={{
          fontFamily: FONT,
          fontSize: 52,
          fontWeight: 700,
          color: COLORS.white,
          margin: "0 0 60px",
          opacity: titleOpacity,
          textAlign: "center",
        }}>
          Ce que nos clients obtiennent
        </h2>

        <div style={{ display: "flex" }}>
          {STATS.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
