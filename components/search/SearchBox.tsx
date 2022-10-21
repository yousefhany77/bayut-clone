import { useState } from "react";
import { Filters } from "../../types";
import DropDown from "./DropDown";
import SearchFilter from "./LocationSearch";
import MinMaxComponent from "./MinMaxRange";
import { FaSearchengin } from "react-icons/fa";
import { BsFilterCircle } from "react-icons/bs";
import TogglePropertyType from "./TogglePropertyType";

function SearchBox() {
  const [filters, setFilters] = useState<Filters>({
    propertyType: "sale",
    rentFrequency: "daily",
  });
  const [moreFilters, ToggleMoreFilters] = useState<boolean>(false);

  return (
    <div className="flex flex-col  gap-4 items-center bg-slate-50 shadow-xl max-w-4xl w-11/12 lg:w-2/3 p-5  absolute bottom-0 translate-y-1/2 rounded-lg">
      {/* Type Toggle */}
      <TogglePropertyType filters={filters} setFilters={setFilters} />
      <div className="w-full    grid  grid-cols-1 gap-3 md:grid-cols-[auto_auto] 2xl:grid-cols-[auto_auto_auto]   lg:gap-1.5">
        {/* Location */}
        <SearchFilter setState={setFilters} />

        {/* residential */}
        <DropDown setState={setFilters} />

        {/* Filter Price */}
        <MinMaxComponent
          title="Price (AED)"
          filterType={"price"}
          setFilters={setFilters}
          isMouny
        />
        {!moreFilters && (
          <div className="group flex-1 w-full h-16 2xl:hidden  flex px-2 items-center justify-center gap-3  2xl:self-start rounded-lg bg-indigo-500 min-w-fit self-end justify-self-end text-white">
            <BsFilterCircle
              size={28}
              className={
                "  group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-200 ease-in-out"
              }
            />
            <p
              onClick={() => ToggleMoreFilters((prev) => !prev)}
              className=" group-hover:text-yellow-400 transition-all duration-200 ease-in-out"
            >
              More Filters
            </p>
          </div>
        )}
        {moreFilters && (
          <MinMaxComponent
            title="Area"
            filterType={"area"}
            setFilters={setFilters}
            unit={"m²"}
          />
        )}
        {moreFilters && (
          <div className="flex gap-3 lg:gap-1.5 md:col-span-full xl:col-span-2">
            <MinMaxComponent
              title="Rooms"
              filterType={"rooms"}
              setFilters={setFilters}
            />
            <MinMaxComponent
              title="Baths"
              filterType={"baths"}
              setFilters={setFilters}
              maxLimit={10}
            />
          </div>
        )}

        {/* search */}

        <div
          className={`flex flex-wrap lg:flex-nowrap justify-between gap-3 lg:gap-1.5 col-span-full  `}
        >
          <button className="cursor-pointer group flex-1 h-16 flex px-2 items-center justify-center gap-3  2xl:self-start rounded-lg bg-indigo-500 min-w-fit self-end justify-self-end text-white">
            <FaSearchengin
              size={23}
              className={
                "  group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-200 ease-in-out"
              }
            />
            <p className=" group-hover:text-yellow-400 transition-all duration-200 ease-in-out">
              Find property
            </p>
          </button>
          <button
            onClick={() => ToggleMoreFilters((prev) => !prev)}
            className="group cursor-pointer flex-1 sm:flex-none hidden   h-16 2xl:flex px-2 items-center justify-center gap-3  2xl:self-start rounded-lg bg-indigo-500 min-w-fit self-end justify-self-end text-white"
          >
            <BsFilterCircle
              size={28}
              className={
                "  group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-200 ease-in-out"
              }
            />
            <p className=" group-hover:text-yellow-400 transition-all duration-200 ease-in-out">
              More Filters
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
