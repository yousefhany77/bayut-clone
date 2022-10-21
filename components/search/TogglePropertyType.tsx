import React from "react";
import { Filters } from "../../types";

interface Props {
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
  filters: Filters;
}

function TogglePropertyType({ setFilters, filters }: Props) {
  return (
    <div className="flex space-x-5">
      <div className="flex  bg-slate-200 mt-2 w-fit  rounded-full overflow-hidden cursor-pointer ">
        <span
          className={`${
            filters.propertyType === "sale" && "bg-indigo-500 text-white"
          } px-4 py-2  font-medium transition-all duration-300  ease-in`}
          onClick={() => {
            setFilters((filters) => ({
              ...filters,
              propertyType: "sale",
            }));
          }}
        >
          Sale
        </span>
        <span
          className={`${
            filters.propertyType === "rent" && "bg-indigo-500 text-white"
          } px-4 py-2  font-medium transition-all duration-300  ease-in`}
          onClick={() => {
            setFilters((filters) => ({
              ...filters,
              propertyType: "rent",
            }));
          }}
        >
          Rent
        </span>
      </div>
      {/* Rent Frequency */}
      {filters.propertyType === "rent" && (
        <div className="flex  bg-slate-200 mt-2 w-fit  rounded-full overflow-hidden cursor-pointer ">
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
