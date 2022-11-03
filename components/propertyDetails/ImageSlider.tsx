import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
type Photo = {
  id: number;
  title: string;
  url: string;
};
interface Props {
  photos: Photo[];
}
function ImageSlider({ photos }: Props) {
  const [postion, setPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const ScrollX = sliderRef.current?.getBoundingClientRect().x || 0;
      const ScrollWidth = sliderRef.current?.scrollWidth || 0;
      const currPosition = Math.abs(
        Math.floor(ScrollX / ScrollWidth) - photos.length
      );
      if (currPosition > postion) {
        setPosition(currPosition);
      }
    };

    sliderRef.current?.parentElement?.addEventListener("scroll", handleScroll);
    return removeEventListener("scroll", handleScroll);
  }, [photos.length, postion]);
  const scroll = (dir: "next" | "prev") =>
    sliderRef.current?.parentElement?.scrollBy({
      top: 0,
      left:
        dir === "next"
          ? sliderRef.current?.scrollWidth
          : -sliderRef.current?.scrollWidth,
    });
  return (
    <div className="relative h-full">
      <button
        className="absolute z-50 right-[2%] top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 "
        onClick={() => scroll("next")}
        title="Next"
      >
        <FcNext size={20} />
      </button>
      <button
        className="absolute z-50 left-[2%] top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 "
        onClick={() => scroll("prev")}
        title="Previous"
      >
        <FcPrevious size={20} />
      </button>
      <div className="w-full h-full bg-slate-50  rounded-xl p-3 gap-3  overflow-x-auto grid grid-flow-col-dense place-items-center  shadow-inner overscroll-contain scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide relative">
        {photos.map((photo) => (
          <div
            className="min-w-[85vw] h-full relative rounded-lg overflow-hidden shadow-lg snap-center "
            key={photo.id}
            ref={sliderRef}
          >
            <Image
              layout="fill"
              src={photo.url}
              alt={photo.title}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={
                "https://media.tenor.com/XasjKGMk_wAAAAAd/load-loading.gif"
              }
            />
          </div>
        ))}
      </div>
      <span className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-2xl text-slate-700 ">
        {[1, 2, 3, 4, 5].map((value, index) => (
          <span
            key={index}
            className={`${value % 5 === postion % 5 ? "text-white" : null}`}
          >
            •
          </span>
        ))}
      </span>
    </div>
  );
}

export default ImageSlider;
