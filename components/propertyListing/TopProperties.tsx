import Image from "next/image";
import Link from "next/link";
import { FaBath, FaLocationArrow } from "react-icons/fa";
import { MdOutlineGridOn } from "react-icons/md";
import { RiHotelBedFill } from "react-icons/ri";
import { PropertiesListingResponse } from "../../types";
import { priceFormater } from "../../utilities/PriceFormer";
interface Props {
  properties: PropertiesListingResponse | undefined;
}

function TopProperties({ properties }: Props) {
  if (!properties) return null;
  return (
    <section className=" p-5 w-5/6 mx-auto">
      <h2 className="text-slate-700 xl:text-3xl font-bold p-5 bg-slate-50 border my-3 shadow w-fit rounded-2xl">
        Properties for sale in Dubai
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-3  ">
        {properties?.hits.map((property) => (
          <Link key={property.id} href={`/details/${property.externalID}`}>
            <div className=" border p-2  rounded-2xl overflow-hidden shadow grid cursor-pointer hover:bg-slate-100 duration-200 ease-in-out  ">
              <div className=" w-full  h-80 relative rounded-2xl overflow-hidden ">
                <Image
                  src={property.coverPhoto.url}
                  alt={property.title}
                  layout={"fill"}
                  objectFit={"cover"}
                  quality={60}
                  className="hover:scale-125 transition-all ease duration-150 cursor-pointer"
                />
              </div>
              <div className=" w-full h-30 mt-4 text-slate-600 grid gap-2 px-1 ">
                <div className=" flex gap-3 text-base items-center ">
                  <FaLocationArrow size={16} className="text-yellow-500" />
                  <h2 className="capitalize font-medium text-sm">
                    {property.location[property.location.length - 3].slug
                      .replace("/", "\t")
                      .replaceAll("-", " ")
                      .split("/")
                      .join(", ")}
                  </h2>
                </div>
                <h2>{priceFormater(property.price)}</h2>
                <h2 className="capitalize font-semibold ">{property.title}</h2>
                <div className="flex items-center self-end justify-around mb-3">
                  <span className="flex items-center gap-2">
                    <RiHotelBedFill size={20} className="text-slate-600" />
                    <span>{property.rooms}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBath size={16} className="text-slate-600" />
                    <span>{property.baths}</span>
                  </span>
                  <span className="flex items-center  ">
                    <MdOutlineGridOn size={16} className="text-slate-600" />
                    <span>
                      {property.area.toFixed(2).toLocaleString()} sqft
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TopProperties;
