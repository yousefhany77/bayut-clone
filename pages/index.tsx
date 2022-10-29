import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../public/Hero.jpg";
import SearchBox from "../components/search/SearchBox";

const Home: NextPage = () => {
  return (
    <div className="w-full   ">
      <div className=" h-screen mb-24 mt-10">
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
        <h1 className="text-center text-indigo-600 text-lg p-5 underline underline-offset-4 decoration-2 decoration-yellow-400 lg:text-2xl">
          Find Your Property
        </h1>
      </section>
    </div>
  );
};

export default Home;
