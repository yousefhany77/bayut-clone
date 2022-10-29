import React, { useState } from "react";
import { Filters } from "../../types";
import { MdOutlineArrowDropDown } from "react-icons/md";
interface Props {
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
  filters: Filters;
}

function TogglePropertyTypeSquare({ setFilters, filters }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  gap-1.5  items-center justify-center relative z-20 ">
      <div className="flex  border w-full lg:w-auto rounded-lg h-16 items-center cursor-pointer overflow-hidden  ">
        <div
          className={`${
            filters.purpose === "for-sale" && "bg-indigo-500 text-white "
          } px-4   font-medium transition-all duration-200  ease-in-out h-full flex items-center w-full`}
          onClick={() => {
            setFilters((filters) => ({
              ...filters,
              purpose: "for-sale",
              rentFrequency: undefined,
            }));
          }}
        >
          <span>Sale</span>
        </div>
        <div
          className={`${
            filters.purpose === "for-rent" && "bg-indigo-500 text-white "
          } px-4  font-medium transition-all duration-200  ease-in-out h-full flex items-center w-full `}
          onClick={() => {
            setIsOpen((prev) => !prev);
            setFilters((filters) => ({
              ...filters,
              purpose: "for-rent",
              rentFrequency: "daily",
            }));
          }}
        >
          <span>Rent</span>
          <MdOutlineArrowDropDown
            className={`${isOpen && "rotate-180 "}ease-in-out duration-150`}
          />
        </div>
      </div>
      {filters.purpose === "for-rent" && isOpen && (
        <div className="grid absolute top-full mt-2    bg-white z-10 w-full   rounded-lg overflow-hidden cursor-pointer border">
          <span
            className={`${
              filters.rentFrequency === "daily" && "bg-indigo-500 text-white "
            } px-4 py-2  font-medium transition-all duration-200  ease-in-out h-full text-center  hover:bg-slate-300 `}
            onClick={() => {
              setFilters((filters) => ({
                ...filters,
                rentFrequency: "daily",
              }));
            }}
          >
            Daily
          </span>
          <span
            className={`${
              filters.rentFrequency === "weekly" &&
              "bg-indigo-500 text-white h-full "
            } px-4 py-2  font-medium transition-all duration-200  ease-in-out text-center  hover:bg-slate-300`}
            onClick={() => {
              setFilters((filters) => ({
                ...filters,
                rentFrequency: "weekly",
              }));
            }}
          >
            Weekly
          </span>
          <span
            className={`${
              filters.rentFrequency === "monthly" && "bg-indigo-500 text-white "
            } px-4 py-2  font-medium transition-all duration-200  ease-in-out text-center hover:bg-slate-300`}
            onClick={() => {
              setFilters((filters) => ({
                ...filters,
                rentFrequency: "monthly",
              }));
            }}
          >
            Monthly
          </span>
          <span
            className={`${
              filters.rentFrequency === "yearly" && "bg-indigo-500 text-white "
            } px-4 py-2  font-medium transition-all duration-200  ease-in-out text-center hover:bg-slate-300`}
            onClick={() => {
              setFilters((filters) => ({
                ...filters,
                rentFrequency: "yearly",
              }));
            }}
          >
            Yearly
          </span>
        </div>
      )}
    </div>
  );
}

export default TogglePropertyTypeSquare;
