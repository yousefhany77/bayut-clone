import { memo, useEffect, useState } from "react";
import { Filters } from "../../types";
import DropDown from "../search/DropDown";
import SearchFilter from "../search/LocationSearch";
import MinMaxComponent from "../search/MinMaxRange";
import { getQueryPrams } from "../../utilities/getQueryPrams";
import { FaSearchengin } from "react-icons/fa";
import TogglePropertyTypeSquare from "./PropertyTypeSquare";
import { useRouter } from "next/router";
import Sort from "./Sort";
import FurnishTypeToggle from "./FurnishTypeToggle";
function PropertFilters() {
  const { query } = useRouter();
  const [filters, setFilters] = useState<Filters>({
    locationExternalIDs: "5002",
    sort: "city-level-score",
    furnished: "all",
  });

  useEffect(() => {
    setFilters((prev) => ({ ...prev, ...query }));
  }, [query]);
  useEffect(() => {
    findPropertyWithFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.sort, filters.furnished]);
  const router = useRouter();
  const findPropertyWithFilters = () => {
    router.push({
      pathname: `/${filters.location ? filters.location : "dubai"}`,
      query: getQueryPrams(filters),
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col ">
      <button
        onClick={() => setIsOpen(false)}
        className={`${
          !isOpen
            ? "hidden"
            : "  lg:hidden w-7 h-7 m-2 self-end  rounded-full border-2 font-thin border-red-400 text-red-400"
        }`}
      >
        X
      </button>
      <div
        className={`lg:flex  gap-1.5  mb-3  w-full   rounded-lg mx-auto shadow lg:shadow-none p-3 lg:p-0 ${
          isOpen ? "grid  lg:flex-wrap" : "hidden"
        }`}
      >
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
        <MinMaxComponent
          title="Area"
          filterType={"area"}
          setFilters={setFilters}
          unit={"sqft"}
        />
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
        <TogglePropertyTypeSquare filters={filters} setFilters={setFilters} />
        {/* search */}

        <button
          onClick={findPropertyWithFilters}
          title="Search 🔍"
          className="cursor-pointer group  h-16 flex px-2 bg-slate-300 md:w-16 items-center justify-center gap-3   rounded-lg b min-w-fit  text-slate-700 transition-all duration-200 ease-in-out hover:bg-indigo-500"
        >
          <FaSearchengin
            size={26}
            className={
              "  group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-200 ease-in-out"
            }
          />
        </button>
      </div>
      <div className="flex items-center  ">
        <button
          className="lg:hidden m-2 bg-indigo-500 text-white py-2  px-4 rounded-md  "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Filters ⚡
        </button>{" "}
        {filters.purpose === "for-rent" && (
          <FurnishTypeToggle filters={filters} setFilters={setFilters} />
          )}
        <Sort setFilters={setFilters} />
      </div>
    </div>
  );
}

export default memo(PropertFilters);
