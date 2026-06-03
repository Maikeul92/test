import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../tokens";
import { GridBackground } from "../components/GridBackground";

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgGlow = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });

  const tagOpacity = spring({ frame: frame - 5, fps, config: { damping: 20 } });
  const titleOpacity = spring({ frame: frame - 20, fps, config: { damping: 16 } });
  const titleScale = spring({ frame: frame - 20, fps, config: { damping: 16 } });
  const btnOpacity = spring({ frame: frame - 50, fps, config: { damping: 18 } });
  const btnScale = spring({ frame: frame - 50, fps, config: { damping: 18 } });

  const btnPulse = interpolate(frame, [60, 80, 100, 120], [1, 1.03, 1, 1.03], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.bg, justifyContent: "center", alignItems: "center" }}>
      <GridBackground opacity={0.06} />

      {/* Background glow */}
      <div style={{
        position: "absolute",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(21,93,253,${bgGlow * 0.25}) 0%, transparent 65%)`,
      }} />

      <div style={{ textAlign: "center", zIndex: 1, padding: "0 100px" }}>
        <p style={{
          fontFamily: FONT,
          fontSize: 18,
          color: COLORS.blue,
          textTransform: "uppercase",
          letterSpacing: "5px",
          margin: "0 0 24px",
          opacity: tagOpacity,
        }}>
          Prêt à changer de vitesse ?
        </p>

        <h2 style={{
          fontFamily: FONT,
          fontSize: 68,
          fontWeight: 800,
          color: COLORS.white,
          margin: "0 0 16px",
          lineHeight: 1.15,
          letterSpacing: "-1px",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}>
          Réserve un appel<br />
          <span style={{ color: COLORS.blue }}>gratuit</span>
        </h2>

        <p style={{
          fontFamily: FONT,
          fontSize: 22,
          color: COLORS.gray,
          margin: "0 0 52px",
          opacity: titleOpacity,
        }}>
          30 minutes pour transformer votre business
        </p>

        {/* CTA Button */}
        <div style={{
          display: "inline-block",
          opacity: btnOpacity,
          transform: `scale(${btnScale * btnPulse})`,
        }}>
          <div style={{
            fontFamily: FONT,
            fontSize: 28,
            fontWeight: 700,
            color: COLORS.white,
            background: COLORS.blue,
            padding: "24px 64px",
            borderRadius: 60,
            letterSpacing: "0.5px",
            boxShadow: `0 0 60px ${COLORS.blue}80, 0 8px 32px ${COLORS.blue}60`,
          }}>
            → iapuka.com
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          width: interpolate(frame, [70, 110], [0, 300], { extrapolateRight: "clamp" }),
          height: 1,
          background: `linear-gradient(90deg, transparent, ${COLORS.blue}, transparent)`,
          margin: "48px auto 0",
        }} />
      </div>
    </AbsoluteFill>
  );
};
