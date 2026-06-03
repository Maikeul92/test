import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../tokens";
import { GridBackground } from "../components/GridBackground";

export const Scene1Titre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineWidth = interpolate(frame, [10, 50], [0, 600], { extrapolateRight: "clamp" });

  const titleOpacity = spring({ frame: frame - 20, fps, config: { damping: 20 } });
  const titleY = interpolate(frame, [20, 50], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const subOpacity = spring({ frame: frame - 45, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.bg, justifyContent: "center", alignItems: "center" }}>
      <GridBackground opacity={0.06} />

      {/* Glow */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.blueGlow} 0%, transparent 70%)`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }} />

      <div style={{ textAlign: "center", zIndex: 1, padding: "0 100px" }}>
        {/* Animated line */}
        <div style={{
          width: lineWidth,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.blue}, transparent)`,
          margin: "0 auto 40px",
        }} />

        <h1 style={{
          fontFamily: FONT,
          fontSize: 72,
          fontWeight: 700,
          color: COLORS.white,
          margin: 0,
          lineHeight: 1.2,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          letterSpacing: "-1px",
        }}>
          Quand le logiciel<br />
          <span style={{ color: COLORS.blue }}>ne suffit plus...</span>
        </h1>

        <div style={{
          width: lineWidth,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.blue}, transparent)`,
          margin: "40px auto 0",
        }} />

        <p style={{
          fontFamily: FONT,
          fontSize: 24,
          color: COLORS.gray,
          marginTop: 32,
          opacity: subOpacity,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}>
          Une nouvelle approche s'impose
        </p>
      </div>
    </AbsoluteFill>
  );
};
