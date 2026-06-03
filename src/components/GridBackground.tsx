import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../tokens";

export const GridBackground: React.FC<{ opacity?: number }> = ({ opacity = 0.07 }) => (
  <AbsoluteFill
    style={{
      backgroundImage: `
        linear-gradient(${COLORS.blue}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1px, transparent 1px),
        linear-gradient(90deg, ${COLORS.blue}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />
);
