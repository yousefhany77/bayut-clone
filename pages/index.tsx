import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../public/Hero.jpg";
import dynamic from "next/dynamic";
import Spinner from "../components/layout/Spinner";
import { fetchProperties } from "../utilities/bayutAPI";
const SearchBox = dynamic(() => import("../components/search/SearchBox"), {
  ssr: false,
  loading: () => <Spinner />,
});
const TopProperties = dynamic(
  () => import("../components/propertyListing/TopProperties"),
  {
    ssr: true,
    loading: () => <Spinner />,
  }
);

const Home: NextPage<{
  properties: any;
}> = ({ properties }) => {
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
              quality={75}
              priority
              layout="fill"
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover scale-x-[-1] opacity-95 object-[13%]   "
            />
          </div>
          <SearchBox />
        </section>
      </div>
      
    </div>
  );
};

export default Home;

const THREE_DAYS = 259200 
export async function getStaticProps() {
  const properties = await fetchProperties({
    locationExternalIDs: "5002",
    categoryExternalID: 16,
  });
  if (!properties)
    return {
      props: {
        properties: null,
      },
    };
  if (properties.hits) properties.hits = properties.hits.splice(0, 8);
  return {
    props: {
      properties,
    }, // will be passed to the page component as props
    revalidate: THREE_DAYS, 
  };
}

import React from "react";
