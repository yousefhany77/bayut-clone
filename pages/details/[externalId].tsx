import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { FiShare } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { IoCopy, IoExit } from "react-icons/io5";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getPropertDetails } from "../../utilities/bayutAPI";
import PropertyImages from "../../components/propertyDetails/PropertyImages";
import Head from "next/head";
import { priceFormater } from "../../utilities/PriceFormer";
import ImageSlider from "../../components/propertyDetails/ImageSlider";
import Spinner from "../../components/layout/Spinner";
import Modal from "../../components/Modal";
import { sanitize } from "dompurify";
const AgencyCard = dynamic(() => import("../../components/agnecy/AgencyCard"), {
  ssr: false,
});
const Map = dynamic(() => import("../../components/propertyDetails/Map"), {
  ssr: false,
});
const PropertyOwnerContact = dynamic(
  () => import("../../components/propertyDetails/PropertyOwnerContact"),
  {
    ssr: false,
  }
);
function PropertyDetailsPage() {
  const {
    query: { externalId },
  } = useRouter();
  const { data } = useQuery(
    ["property", externalId],
    () => getPropertDetails(externalId as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24 * 2,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
  const describtionRef = useRef(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [windowWidth]);
  const [sharePortalIsOpen, setSharePortalIsOpen] = useState(false);
  const share = () => {
    // if browser supports web share api -> try to share with web share api
    if (navigator.share) {
      navigator.share({
        title: data?.title || document.title,
        url: window.location.href,
        text: "That is a demo app built with NextJs with integration with the bayut API \n  @github.com/yousefhany77/",
      });
    } else {
      setSharePortalIsOpen(true);
      navigator.clipboard.writeText(location.href);
    }
  };

  if (data)
    return (
      <main className="max-w-7xl mx-auto p-5  ">
        {sharePortalIsOpen && (
          <Modal isOpen={sharePortalIsOpen}>
            <div className="flex items-center justify-center h-full">
              <div className="bg-white px-5 py-2 rounded-lg">
                <div className="flex items-center justify-between my-5">
                  <h2>Share</h2>
                  <span
                    onClick={() => setSharePortalIsOpen(false)}
                    className="rounded-full text-rose-500 cursor-pointer hover:text-rose-700 transition-colors duration-100 ease-in flex gap-2 items-center justify-end"
                  >
                    Exit
                    <IoExit size={22} />
                  </span>
                </div>
                <p
                  onClick={() => navigator.clipboard.writeText(location.href)}
                  className="bg-slate-300 rounded-lg py-2 px-4 flex items-center gap-3 my-5 shadow-md"
                >
                  <span className="font-medium">{window.location.href}</span>
                  <IoCopy
                    size={22}
                    className="text-gray-50 transition-colors duration-150 ease-in-out cursor-pointer hover:text-slate-700"
                  />
                </p>
              </div>
            </div>
          </Modal>
        )}
        <Head>
          <title>
            {"Bayut | " +
              data.location[data?.location?.length - 2].slug
                .replaceAll("/", " ")
                .replaceAll("-", " ")}
          </title>
        </Head>
        <h1 className="text-lg md:text-3xl font-semibold mt-3 md:mt-6  ">
          {data.title}
        </h1>
        {/* Location */}
        <div className="flex items-center justify-between my-2  md:my-4 ">
          <span
            className=" flex gap-3 md:text-lg underline font-medium cursor-pointer items-center "
            onClick={() =>
              locationRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <FaLocationArrow size={16} className="text-yellow-500" />
            <span className="capitalize max-w-[35ch] md:max-w-none">
              {data.location[data?.location?.length - 2].slug
                .replace("/", "\t")
                .replaceAll("-", " ")
                .split("/")
                .join(", ")}
            </span>
          </span>
          <span
            onClick={share}
            className="flex w-fit items-center gap-2 cursor-pointer hover:text-yellow-600 transition-colors duration-150 ease font-medium "
          >
            <FiShare /> share{" "}
          </span>
        </div>
        {/* Propery Images */}
        {!windowWidth ? (
          <Spinner />
        ) : windowWidth > 1040 ? (
          <PropertyImages photos={data.photos} />
        ) : (
          <div className="h-[55vh]">
            <ImageSlider photos={data.photos} />
          </div>
        )}

        <section className="grid grid-cols-3 my-6  ">
          {/* Price Mobile View */}
          <span className="flex items-end gap-2 col-span-3 mb-3 md:hidden">
            <h2 className="text-2xl">{priceFormater(data.price)}</h2>
            {data.purpose === "for-rent" ? (
              <span className="font-semibold text-lg">
                / {data.rentFrequency}
              </span>
            ) : null}
          </span>
          {/* Details */}

          <div className="col-span-3  md:col-span-2 md:p-6 pl-0 ">
            <h2 className="capitalize text-lg md:text-3xl font-semibold text-slate-700">
              {data?.category[1].slug.replaceAll("-", " ")}
              <span> by {data.agency?.name}</span>
            </h2>
            {/* rooms | baths | area */}
            <div className="space-x-2 my-2 text-lg font-light">
              <span>{data.rooms} rooms</span>
              <span>•</span>
              <span>{data.baths} baths</span>
              <span>•</span>
              <span>{data.area?.toLocaleString()} sqft</span>
            </div>
            {/* Description */}
            <h3 className="my-2 mt-5 font-semibold text-2xl ">Description</h3>
            <p ref={describtionRef} className="text-justify leading-relaxed ">
              {formatDesc(data.description, describtionRef.current)}
            </p>
            {/* Amenities */}
            <div className="my-10">
              <h2 className="text-2xl my-2">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {data?.amenities?.map((amenity) => (
                  <div key={amenity.externalGroupID}>
                    <span className="font-semibold text-lg underline underline-offset-2">
                      {amenity.text}
                    </span>
                    <ul className="ml-1">
                      {amenity.amenities.map((item: any) => (
                        <li key={item.externalID}>{item.text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Location && Map */}
              <div className="my-16 w-full">
                <h2
                  className="capitalize text-lg md:text-2xl font-semibold  m-1 "
                  ref={locationRef}
                >
                  {data.location[data?.location?.length - 1].slug
                    .replace("/", "\t")
                    .replaceAll("-", " ")
                    .split("/")
                    .join(", ")}
                </h2>

                <Map geography={data.geography} />
              </div>
              {/* Floor Plans */}
              {data.floorPlans?.length ? (
                <div className="my-16">
                  <h2 className="font-medium my-2 text-lg">
                    Floor Plans ({data.floorPlans.length})
                  </h2>
                  <ImageSlider photos={data.floorPlans} />
                </div>
              ) : null}

              {/* Agency */}
              <AgencyCard
                name={data.agency.name}
                phoneNumber={data.phoneNumber}
                contactName={data.contactName}
                
              />
            </div>
          </div>
          {/* Contact Details */}
          <div className=" relative hidden md:block  ">
            <div className="  shadow-lg w-full px-6 py-8 sticky top-[10%]  rounded-lg  ">
              <PropertyOwnerContact
                phoneNumber={data.phoneNumber}
                contactName={data.contactName}
                price={data.price}
                purpose={data.purpose}
                rentFrequency={data.rentFrequency}
              />
            </div>
          </div>
        </section>
      </main>
    );
}

export default PropertyDetailsPage;

const formatDesc = (str: string, pTag: any): any => {
  const pragraph = str.split(". ").map((p) => {
    return `<p class='my-2 '>${p}.</p>`;
  });
  if (pTag !== null) {
    pTag.innerHTML = sanitize(pragraph.join(""));
    pTag.querySelector("ul")?.classList?.add("list-disc", "list-inside", "m-2");
    pTag
      .querySelector("ul")
      ?.previousElementSibling?.classList.add(
        "font-semibold",
        "mt-2",
        "text-lg"
      );
  }
};

const queryClient = new QueryClient();
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800,maxage=604800 , stale-while-revalidate=172800"
  );
  const {
    query: { externalId },
  } = context;
  if (!externalId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  await queryClient.prefetchQuery(
    ["property", externalId],
    () => getPropertDetails(externalId as string),
    {}
  );
  const data = queryClient.getQueryData(["property", externalId]) || {};

  if (Object.keys(data).length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
