import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../tokens";
import { GridBackground } from "../components/GridBackground";

export const Scene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const glowScale = interpolate(frame, [0, 60], [0.8, 1.2], { extrapolateRight: "clamp" });
  const glowOpacity = interpolate(frame, [0, 30, 60], [0, 1, 0.7]);

  const labelOpacity = spring({ frame: frame - 10, fps, config: { damping: 20 } });
  const logoOpacity = spring({ frame: frame - 20, fps, config: { mass: 1.2, damping: 14 } });
  const logoScale = spring({ frame: frame - 20, fps, config: { mass: 1.2, damping: 14 } });
  const subOpacity = spring({ frame: frame - 50, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.bg, justifyContent: "center", alignItems: "center" }}>
      <GridBackground opacity={0.06} />

      {/* Pulsing glow */}
      <div style={{
        position: "absolute",
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.blueGlow} 0%, transparent 65%)`,
        transform: `scale(${glowScale})`,
        opacity: glowOpacity,
      }} />

      {/* Orbit ring */}
      <div style={{
        position: "absolute",
        width: 400,
        height: 400,
        borderRadius: "50%",
        border: `1px solid ${COLORS.blue}30`,
        opacity: logoOpacity,
      }} />
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        border: `1px dashed ${COLORS.blue}20`,
        opacity: logoOpacity,
      }} />

      <div style={{ textAlign: "center", zIndex: 1 }}>
        <p style={{
          fontFamily: FONT,
          fontSize: 18,
          color: COLORS.blue,
          textTransform: "uppercase",
          letterSpacing: "5px",
          margin: "0 0 24px",
          opacity: labelOpacity,
        }}>
          La solution
        </p>

        <h1 style={{
          fontFamily: FONT,
          fontSize: 120,
          fontWeight: 800,
          color: COLORS.white,
          margin: 0,
          letterSpacing: "-2px",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          background: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.blueLight} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          IAPUKA
        </h1>

        <div style={{
          width: 80,
          height: 3,
          background: COLORS.blue,
          margin: "32px auto",
          borderRadius: 2,
          opacity: subOpacity,
          boxShadow: `0 0 20px ${COLORS.blue}`,
        }} />

        <p style={{
          fontFamily: FONT,
          fontSize: 26,
          color: COLORS.grayLight,
          opacity: subOpacity,
          letterSpacing: "1px",
          maxWidth: 600,
          lineHeight: 1.5,
        }}>
          L'intelligence artificielle au service<br />de votre croissance
        </p>
      </div>
    </AbsoluteFill>
  );
};
