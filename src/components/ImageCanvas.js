import { useCallback, useEffect, useRef } from "react";

const ImageCanvas = ({ frameIndex, images }) => {
  const canvasRef = useRef(null);
  const context = canvasRef.current?.getContext?.("2d");

  const updateImage = useCallback(() => {
    if (images[frameIndex] && context) {
      context.drawImage(images[frameIndex], 0, 0);
    }
  }, [frameIndex, context, images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext?.("2d");
    canvas.width = 1158;
    canvas.height = 770;
    requestAnimationFrame(() => context.drawImage(images[0], 0, 0));
  }, [images, canvasRef.current]);

  useEffect(() => {
    requestAnimationFrame(() => updateImage());
  }, [updateImage]);

  return <canvas ref={canvasRef} />;
};

export default ImageCanvas;
