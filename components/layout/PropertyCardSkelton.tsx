import { priceFormater } from "../../utilities/PriceFormer";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath, FaLocationArrow } from "react-icons/fa";
import { MdOutlineGridOn, MdVerified } from "react-icons/md";
import Spinner from "../layout/Spinner";

function PropertyCardSkelton() {
  return (
    <div className="grid  md:grid-cols-3 gap-3  rounded-lg   cursor-pointer relative border ">
      {/* Property Image */}

      <div className="bg-slate-200 flex items-center justify-center">
        <Spinner />
      </div>
      {/* Details */}
      <div className="  md:col-span-2  rounded-lg p-5 grid gap-2 items-center text-slate-800  animate-pulse">
        <div className="text-xl space-y-1">
          {/* Price */}
          <h2 className="flex items-center ">
            <span>AED</span>
            <span className="  bg-slate-300 h-2 w-16 mx-2 rounded " />
            <span>/</span>
            <span className="  bg-slate-300 h-2 w-16 mx-2 rounded " />
            <MdVerified className="text-emerald-500 ml-2" size={22} />
          </h2>
          {/* property type */}

          <span className=" block  bg-slate-300 h-2 w-1/4 rounded " />
        </div>
        {/* Location */}
        <div className=" flex gap-3 text-base items-center ">
          <FaLocationArrow size={16} className="text-yellow-500" />
          <span className="  bg-slate-300 h-2 w-2/4 rounded " />
        </div>
        {/* title */}

        <span className="  bg-slate-300 h-2 w-3/4 rounded " />
        <span className="  bg-slate-300 h-2 w-1/4 rounded " />
        {/* tags */}
        <div className="flex items-center gap-2">
          <span className="bg-slate-400 text-white text-sm capitalize  px-3  h-5 w-12 rounded-full">
            <span className="  bg-slate-300 h-2 w-1/4 rounded " />
          </span>
        </div>
        {/*  rooms | baths | Area */}
        <div className="flex items-center gap-5 self-end">
          <span className="flex  gap-2  items-center ">
            <RiHotelBedFill size={29} className="text-slate-600" />
            <span className="bg-slate-300 h-2 w-10 rounded " />
          </span>
          <span className="flex  gap-2  items-center ">
            <FaBath size={21} className="text-slate-600" />
            <span className="bg-slate-300 h-2 w-10 rounded " />
          </span>
          <span className="flex  gap-2  items-center ">
            <MdOutlineGridOn size={23} className="text-slate-600" />
            <span className="bg-slate-300 h-2 w-10 rounded " />
          </span>
          <span className=" ml-auto  bg-slate-300 h-2 w-30 rounded " />
        </div>
      </div>
    </div>
  );
}

export default PropertyCardSkelton;
