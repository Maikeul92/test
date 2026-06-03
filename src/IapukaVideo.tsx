import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { COLORS, FPS } from "./tokens";
import { Scene1Titre } from "./scenes/Scene1Titre";
import { Scene2Problemes } from "./scenes/Scene2Problemes";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene4Resultats } from "./scenes/Scene4Resultats";
import { Scene5CTA } from "./scenes/Scene5CTA";

// Scene durations in frames (total = 1200 = 40s)
const S1 = 6 * FPS;  // 6s
const S2 = 9 * FPS;  // 9s
const S3 = 8 * FPS;  // 8s
const S4 = 9 * FPS;  // 9s
const S5 = 8 * FPS;  // 8s

export const IapukaVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <Series>
        <Series.Sequence durationInFrames={S1}>
          <Scene1Titre />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S2}>
          <Scene2Problemes />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S3}>
          <Scene3Solution />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S4}>
          <Scene4Resultats />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S5}>
          <Scene5CTA />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
