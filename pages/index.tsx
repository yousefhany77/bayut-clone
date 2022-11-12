import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../public/Hero.jpg";
import SearchBox from "../components/search/SearchBox";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Spinner from "../components/layout/Spinner";
const TopProperties = dynamic(
  () => import("../components/propertyListing/TopProperties"),
  {
    suspense: true,
  }
);

const Home: NextPage = () => {
  return (
    <div className="w-full   ">
      <div className=" h-screen  mt-10">
        <section className=" mx-auto max-w-[90vw] md:max-w-[75vw] my-5 flex flex-col items-center relative ">
          {/* Hero section */}
          <div className=" relative bg-teal-500 h-[calc(75vh)] w-full rounded-3xl overflow-hidden ">
            <Image
              alt="building"
              src={Hero}
              placeholder="blur"
              quality={80}
              priority
              layout="fill"
              className="object-cover scale-x-[-1] opacity-95 object-[13%]   "
            />
          </div>
          <SearchBox />
        </section>
      </div>
      <section className="">
        <hr className="max-w-7xl mx-auto my-20 px-5 border  border-slate-200/50" />
        <h2 className="text-center capitalize text-indigo-600 text-lg  underline underline-offset-4 decoration-2 decoration-yellow-400 lg:text-4xl">
          trending Properties in UAE 🇦🇪
        </h2>
        <Suspense fallback={<Spinner />}>
          <TopProperties title="Dubai" locationExternalIDs={"5002"} />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
