import { useNProgress } from "@tanem/react-nprogress";

export const Loading: React.FC<{ isRouteChanging: boolean }> = ({
  isRouteChanging,
}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });
  //  opacity: ${isFinished ? 0 : 1};
  //           margin-left: ${(-1 + progress) * 100}%;

  return (
    <>
      <style jsx>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointer-events: none;
          transition: opacity ${animationDuration}ms ease;
        }

        .bar {
          background: #facc15;
          height: 3px;
          left: 0;
          margin-left: margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms ease;
          width: 100%;
          z-index: 1031;
        }
      `}</style>
      <div className="container">
        <div className="bar" />
      </div>
    </>
  );
};

export default Loading;
