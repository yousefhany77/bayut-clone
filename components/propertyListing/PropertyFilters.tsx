import { memo, useCallback, useEffect, useState } from "react";
import { Filters, SortingMethods } from "../../types";
import DropDown from "../search/DropDown";
import SearchFilter from "../search/LocationSearch";
import MinMaxComponent from "../search/MinMaxRange";
import { getQueryPrams } from "../../utilities/getQueryPrams";
import { FaSearchengin } from "react-icons/fa";
import TogglePropertyTypeSquare from "./PropertyTypeSquare";
import { useRouter } from "next/router";
import Sort from "./Sort";
import FurnishTypeToggle from "./FurnishTypeToggle";
import Modal from "../Modal";
import { IoExit } from "react-icons/io5";
function PropertFilters() {
  const { query, push } = useRouter();
  const [filters, setFilters] = useState<Filters>({
    sort: "city-level-score",
    furnished: "all",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessageIsopen, setErrorMessageIsOpen] = useState(false);

  useEffect(() => {
    if (query.locationExternalIDs) {
      setFilters((prev) => ({ ...prev, ...query }));
    }
  }, [query]);

  const findPropertyWithFilters = () => {
    if (!isError ) {
      push({
        pathname: `/${filters.location ? filters.location : "uae"}`,
        query: getQueryPrams(filters),
      });
      console.log("pushing");
      setErrorMessageIsOpen(false);
    } else {
      console.log("Here Error");
      setErrorMessageIsOpen(true);
    }
  }

  useEffect(() => {
    if (filters.sort !== "city-level-score") {
      findPropertyWithFilters();
    }
  }, [filters.sort, filters.furnished]);
  return (
    <div className="flex flex-col ">
      {errorMessageIsopen && (
        <Modal isOpen={errorMessageIsopen}>
          <div className="flex flex-col items-center justify-center h-full ">
            <div className="bg-white p-7 rounded-xl  ">
              <div className="flex mb-5 justify-between w-full">
                <h2 className="font-semibold">Error</h2>
                <span
                  onClick={() => setErrorMessageIsOpen(false)}
                  className="rounded-full text-rose-500  cursor-pointer hover:text-rose-700 transition-colors duration-100 ease-in flex gap-2 items-center justify-end"
                >
                  Exit
                  <IoExit size={22} />
                </span>
              </div>
              <h2 className="font-medium text-lg capitalize text-rose-400 shadow-inner px-4 py-2 rounded-xl bg-slate-100">
                please provide an valid property location
              </h2>
            </div>
          </div>
        </Modal>
      )}
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
        <SearchFilter
          setState={setFilters}
          isError={isError}
          setIsError={setIsError}
        />
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
      <div className="flex items-center flex-wrap ">
        <button
          className="lg:hidden m-2 bg-indigo-500 text-white py-2  px-4  h-10 rounded-lg "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Filters ⚡
        </button>{" "}
        {filters.purpose === "for-rent" && (
          <FurnishTypeToggle filters={filters} setFilters={setFilters} />
        )}
        <Sort setFilters={setFilters} value={filters.sort as SortingMethods} />
      </div>
    </div>
  );
}

export default memo(PropertFilters);
