import { Composition } from "remotion";
import { IapukaVideo } from "./IapukaVideo";
import { FPS, DURATION_FRAMES } from "./tokens";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="IapukaVideo"
      component={IapukaVideo}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  );
};
