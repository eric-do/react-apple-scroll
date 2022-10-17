import "./styles.css";
import ImageCanvas from "./components/ImageCanvas";
import { useState, useEffect, useRef } from "react";
import { getPreloadedImages } from "./components/helpers";

const FRAME_COUNT = 148;
const images = getPreloadedImages(FRAME_COUNT);

export default function App() {
  const [frameIndex, setFrameIndex] = useState(0);
  const htmlRef = useRef(document.documentElement);

  useEffect(() => {
    const onScroll = () => {
      const html = htmlRef.current;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      setFrameIndex(
        Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT))
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      {images.length > 0 && (
        <ImageCanvas frameIndex={frameIndex} images={images} />
      )}
    </div>
  );
}
