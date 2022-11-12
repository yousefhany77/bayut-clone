import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import { IoExit } from "react-icons/io5";
import ImageSlider from "./ImageSlider";
import placeholder from "../../public/placeholder.jpg";
type Photo = {
  id: number;
  title: string;
  url: string;
};
interface Props {
  photos: Photo[];
}
function PropertyImages({ photos }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  if (photos.length >= 5) {
    const mainPhotos = photos.slice(1, 5);
    return (
      <div className="grid  gap-2 grid-cols-8 grid-rows-2 rounded-xl overflow-hidden w-full h-[25rem] relative ">
        <Modal isOpen={isOpen}>
          <span
            onClick={() => setIsOpen(false)}
            className="ml-auto mr-10 my-10 bg-white w-fit px-4 py-1 rounded-full text-rose-500 cursor-pointer hover:text-rose-700 transition-colors duration-100 ease-in flex gap-2 items-center justify-end"
          >
            Exit
            <IoExit size={22} />
          </span>
          <div className="w-2/3 h-[30rem]    mx-auto">
            <ImageSlider photos={photos} />
          </div>
        </Modal>
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-[5%] right-[2%] z-50 bg-white px-3 py-1 rounded-lg cursor-pointer shadow-md hover:bg-slate-100 transition-colors ease-in duration-150 "
        >
          View More 👀
        </button>

        <div className="bg-sky-slate col-span-4 row-span-full relative">
          <Image
            src={photos[0] ? photos[0].url : placeholder}
            alt={photos[0] ? photos[0].title : "property image"}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {mainPhotos.map((photo) => (
          <div key={photo.id} className="bg-slate-100 col-span-2 relative ">
            <Image
              src={photo.url}
              alt={photo.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid  gap-2 grid-cols-3 grid-rows-2 rounded-xl overflow-hidden w-full h-[25rem] relative ">
        <span className="absolute bottom-[5%] right-[2%] z-50 bg-white px-3 py-1 rounded-lg cursor-pointer shadow-md hover:bg-slate-100 transition-colors ease-in duration-150 ">
          View More 👀
        </span>
        <div className=" col-span-2 row-span-full relative">
          <Image
           src={photos[0] ? photos[0].url : placeholder}
           alt={photos[0] ? photos[0].title : "property image"}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src={photos[1] ? photos[1].url : placeholder}
            layout="fill"
            objectFit="cover"
            alt={photos[1] ? photos[1].title : "property image"}
          />
        </div>
        <div className="relative">
          <Image
            src={photos[2] ? photos[2].url : placeholder}
            layout="fill"
            objectFit="cover"
            alt={photos[2] ? photos[2].title : "property image"}
          />
        </div>
      </div>
    );
  }
}

export default PropertyImages;
