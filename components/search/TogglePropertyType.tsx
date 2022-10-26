import React from "react";
import { Filters } from "../../types";

interface Props {
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
  filters: Filters;
}

function TogglePropertyType({ setFilters, filters }: Props) {
  return (
    <div className="flex  gap-3 flex-wrap items-center justify-center">
      <div className="flex  bg-slate-200 mt-2 w-fit  rounded-full overflow-hidden cursor-pointer ">
        <span
          className={`${
            filters.purpose === "for-sale" && "bg-indigo-500 text-white"
          } px-4 py-2  font-medium transition-all duration-300  ease-in`}
          onClick={() => {
            setFilters((filters) => ({
              ...filters,
              purpose: "for-sale",
            }));
          }}
        >
          Sale
        </span>
        <span
          className={`${
            filters.purpose === "for-rent" && "bg-indigo-500 text-white"
          } px-4 py-2  font-medium transition-all duration-300  ease-in`}
          onClick={() => {
            setFilters((filters) => ({
              ...filters,
              purpose: "for-rent",
              rentFrequency: "daily",
            }));
          }}
        >
          Rent
        </span>
      </div>
      {/* Rent Frequency */}
      {filters.purpose === "for-rent" && (
        <div className="grid grid-cols-2  sm:flex  bg-slate-200 mt-2   rounded-2xl sm:rounded-full overflow-hidden cursor-pointer ">
          <span
            className={`${
              filters.rentFrequency === "daily" && "bg-indigo-500 text-white"
            } px-4 py-2  font-medium transition-all duration-300  ease-in`}
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
              filters.rentFrequency === "weekly" && "bg-indigo-500 text-white"
            } px-4 py-2  font-medium transition-all duration-300  ease-in`}
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
              filters.rentFrequency === "monthly" && "bg-indigo-500 text-white"
            } px-4 py-2  font-medium transition-all duration-300  ease-in`}
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
              filters.rentFrequency === "yearly" && "bg-indigo-500 text-white"
            } px-4 py-2  font-medium transition-all duration-300  ease-in`}
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

export default TogglePropertyType;
