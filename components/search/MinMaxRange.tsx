import React, { useCallback, useEffect, useRef, useState } from "react";
import { Filters } from "../../types";
import { priceFormater } from "../../utilities/PriceFormer";

interface Props {
  title: string;
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
  filterType: keyof Filters;
  isMouny?: boolean | null;
  maxLimit?: number;
  unit?: string;
}
const MinMaxRange = ({
  title,
  setFilters,
  filterType,
  isMouny,
  unit = "",
  maxLimit,
}: Props) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const handleChange = useCallback(
    (Type: "min" | "max", event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;
      if (Type === "min") {
        const value = parseInt(input.value);
        if (maxLimit) {
          setMin(
            !Number.isNaN(value) ? (value > maxLimit ? maxLimit : value) : 0
          );
        } else {
          setMin(!Number.isNaN(value) ? value : 0);
        }
      } else {
        const value = parseInt(input.value);
        if (maxLimit) {
          setMax(
            !Number.isNaN(value) ? (value > maxLimit ? maxLimit : value) : 0
          );
        } else {
          setMax(!Number.isNaN(value) ? value : 0);
        }
      }
    },
    [maxLimit]
  );
  const targetRef = useRef(null);
  useEffect(() => {
    if (max < min && max !== 0) setError(true);
    else {
      setError(false);
      setFilters((filters) => ({
        ...filters,

        [filterType]: {
          Min: min,
          Max: max,
        },
      }));
    }
  }, [min, max, setFilters, filterType]);
  const titleRef = useRef(null);
  useEffect(() => {
    const handler = (event: Event) => {
      const element = event.target as HTMLElement;

      if (
        element.parentElement !== targetRef.current &&
        element !== titleRef.current
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", (event) => handler(event));
    return () =>
      document.removeEventListener("mousedown", (event) => handler(event));
  }, []);
  return (
    <div
      className={`border flex flex-col items-center gap-2 p-2 min-h-[4rem] flex-1 relative ${
        isOpen ? "h-auto shadow-sm bg-white" : "max-h-20 text-sm  "
      } rounded-lg   focus-within:shadow-lg   ${
        error && "border-2 border-red-400"
      }  `}
    >
      <div
        className="h-12  flex items-center w-full  "
        onClick={() => setIsOpen(!isOpen)}
      >
        {(min > 0 || max > 0) && !isOpen ? (
          <div
            className={`flex 2xl:flex-col  justify-around text-lg lg:text-base w-full text-center li text-black overflow-hidden  
            `}
          >
            {error && (
              <p className="capitalize mt-1 mb-2 text-red-400 font-medium ">
                Max must be more then min
              </p>
            )}
            {isMouny ? (
              <>
                <span className="truncate capitalize" data-testid={"min"}>
                  <span className="font-medium ">Min:</span>{" "}
                  {min !== 0 ? priceFormater(min) : "Minimum"}
                </span>
                <span className="truncate" data-testid={"max"}>
                  <span className="font-medium">Max:</span>{" "}
                  {max ? priceFormater(max) : "any"}
                </span>
              </>
            ) : (
              <div className="grid grid-cols-[auto_1fr]">
                <p className="font-medium ">{title}:</p>
                <div className="flex justify-around ">
                  <span className="truncate capitalize" data-testid={"min"}>
                    <span className="font-medium ">Min:</span>{" "}
                    {min === 0 ? "Minimum" : min + " " + unit}
                  </span>
                  <span className="truncate" data-testid={"max"}>
                    <span className="font-medium">Max:</span>{" "}
                    {!max || max === 0 ? "any" : max + " " + unit}
                  </span>{" "}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p
            className="font-medium text-lg text-center w-full bg-transparent cursor-pointer"
            ref={titleRef}
          >
            {title}
          </p>
        )}
      </div>
      {error && isOpen && (
        <p className="capitalize  text-red-400 font-medium">
          Max must be more then min
        </p>
      )}
      {isOpen && (
        <div
          className=" space-y-2  flex items-center flex-wrap gap-1 absolute top-16 mt-2 bg-white p-2 py-4 rounded-lg shadow-lg border z-10"
          ref={targetRef}
        >
          <label htmlFor="min">Min:</label>
          <input
            id="min"
            type="text"
            placeholder={"min"}
            value={min}
            min={0}
            className="w-full h-12 bg-transparent border rounded-lg  px-2"
            onChange={(event) => handleChange("min", event)}
          />
          <label htmlFor="max">Max:</label>
          <input
            id="max"
            type="text"
            max={maxLimit ? maxLimit : undefined}
            className="w-full h-12 bg-transparent border rounded-lg  px-2"
            placeholder={"max"}
            value={max && max > 0 ? max : ""}
            onChange={(event) => handleChange("max", event)}
          />
        </div>
      )}
    </div>
  );
};

export default MinMaxRange;
