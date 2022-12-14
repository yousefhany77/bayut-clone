import Image from "next/image";
import { PropertiesListing } from "../../types";
import { priceFormater } from "../../utilities/PriceFormer";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath, FaLocationArrow } from "react-icons/fa";
import { MdOutlineGridOn, MdVerified } from "react-icons/md";
import Badge from "./Badge";
import Link from "next/link";
import placeholder from "../../public/placeholder.jpg";

interface Props {
  propertyDetails: PropertiesListing;
}
function PropertyListingCard({ propertyDetails }: Props) {
  console.log(propertyDetails);
  const lastIndexLocation = propertyDetails.location.length - 2;
  const keywords = propertyDetails?.keywords
    ?.filter((str) => str.match(/[a-z]/i))
    ?.slice(0, 6);
  return (
    <Link href={`/details/${propertyDetails.externalID} `} prefetch={false}>
      <div className="grid  md:grid-cols-3 gap-3  rounded-lg   cursor-pointer relative border">
        {/* Badge */}
        <Badge type={propertyDetails.product} />
        {/* Property Image */}

        <Image
          // src={propertyImg}
          src={
            propertyDetails.coverPhoto
              ? propertyDetails.coverPhoto.url
              : placeholder
          }
          alt={propertyDetails.title}
          objectFit="cover"
          width={800}
          height={600}
          className="rounded-lg "
          quality={60}
        />

        {/* Details */}
        <div className="  md:col-span-2  rounded-lg p-5 grid gap-5 md:gap-3 items-center text-slate-800 ">
          <div className="text-xl space-y-1">
            {/* Price */}
            <h2 className="flex items-center ">
              {priceFormater(propertyDetails.price, false)}
              <span className="font-normal text-lg ml-2 ">
                {propertyDetails.purpose === "for-rent" &&
                  `/${propertyDetails.rentFrequency}`}
              </span>
              {propertyDetails.isVerified && (
                <MdVerified className="text-emerald-500 ml-2" size={22} />
              )}
            </h2>
            {/* property type */}
            <h3 className="font-medium text-base text-slate-500">
              {propertyDetails.category[0].name} |{" "}
              {propertyDetails.category[1].name}
            </h3>
          </div>
          {/* Location */}
          <div className=" flex gap-3 text-base items-center ">
            <FaLocationArrow size={16} className="text-yellow-500" />
            <span className="capitalize">
              {propertyDetails.location[lastIndexLocation].slug
                .replace("/", "\t")
                .replaceAll("-", " ")
                .split("/")
                .join(", ")}
            </span>
          </div>
          {/* title */}
          <p className="text-lg ">{propertyDetails.title}</p>
          {/* tags */}
          {keywords && (
            <div className="flex items-center gap-2 flex-wrap">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-slate-400 text-white text-sm capitalize w-fit px-3  py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
          {/*  rooms | baths | Area */}
          <div className="flex items-center gap-5 self-end">
            <span className="flex items-center gap-2">
              <RiHotelBedFill size={29} className="text-slate-600" />
              <span>{propertyDetails.rooms}</span>
            </span>
            <span className="flex items-center gap-2">
              <FaBath size={21} className="text-slate-600" />
              <span>{propertyDetails.baths}</span>
            </span>
            <span className="flex items-center gap-2 ">
              <MdOutlineGridOn size={23} className="text-slate-600" />
              <span>
                {propertyDetails.area.toFixed(2).toLocaleString()} sqft
              </span>
            </span>
            {propertyDetails.agency && (
              <span className="hidden md:block font-medium text-sm text-slate-800 ml-auto font-sans">
                by: {propertyDetails.contactName} @{" "}
                {propertyDetails.agency.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyListingCard;
