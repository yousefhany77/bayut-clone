import { memo, useState, useEffect, useRef } from "react";
import { CiCircleRemove, CiLocationArrow1 } from "react-icons/ci";
import { TbRoute } from "react-icons/tb";
import { Filters, Hit } from "../../types";
import * as bayut from "../../utilities/bayutAPI";
interface Props {
  setState: (filters: (filter: Filters) => Filters) => unknown;
  isError: boolean;
  setIsError: (isError: boolean) => unknown;
}

function SearchFilter({ setState: setFilters, setIsError, isError }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [autocompleteRes, setAutocomplete] = useState<Hit[]>([]);
  const [drop, setDrop] = useState<boolean>(false);
  const autoCompletRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const setLocation = (locationName: string, locationId: string) => {
    setSelectedLocation(locationName);

    setFilters((filters) => ({
      ...filters,
      location: locationName,
      locationExternalIDs: locationId.toString(),
    }));
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    setAutocomplete([]);
    const controller = new AbortController();
    const autocomplete = async () => {
      setDrop(true);
      const hits = await bayut.search(searchTerm, controller.signal);
      
      if (hits?.length && hits.length > 0 && Array.isArray(hits)) {
        setIsLoading(false);
        setAutocomplete(hits);
        setIsError(false);
      } else if (!hits || hits.length === 0) {
        setAutocomplete([]);
        setIsError(true);
        setIsLoading(false);
      }
    };
    if (searchTerm.length > 2) autocomplete();
    return () => controller.abort();
  }, [searchTerm, setIsError]);
  useEffect(() => {
    const handler = (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.parentElement !== autoCompletRef.current) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", (event) => handler(event));
    return () =>
      document.removeEventListener("mousedown", (event) => handler(event));
  }, []);
  return (
    <div className="relative">
      <div
        onClick={() => inputRef.current?.focus()}
        className={`group border flex  items-center gap-2 px-3 h-16 rounded-lg ${
          isError ? "border-rose-500" : "border-slate-200"
        }   focus-within:shadow-lg shadow-black focus-within:bg-white relative`}
      >
        <CiLocationArrow1 size={23} className="text-gray-600" />
        {selectedLocation ? (
          <p
            onClick={() => {
              setSearchTerm(selectedLocation);
              setDrop(true);
              setSelectedLocation("");
            }}
            className="cursor-pointer font-medium text-lg pl-1.5 bg-transparent outline-none w-full truncate sm:max-w-[20ch] lg:max-w-none text-indigo-600"
          >
            {selectedLocation}
          </p>
        ) : (
          <input
            type="text"
            id="Enter Location"
            ref={inputRef}
            value={searchTerm}
            placeholder="Enter Location"
            onChange={(event) => setSearchTerm(event?.target.value)}
            onFocus={() => setDrop(true)}
            className=" font-medium text-lg pl-1.5 bg-transparent outline-none w-36  transition-all duration-200  ease-[cubic-bezier(.47,-0.98,.48,1.67)] focus:placeholder:text-gray-200 placeholder:text-black focus:w-full "
          />
        )}
        <CiCircleRemove
          size={23}
          className="text-gray-600 absolute right-3 cursor-text bottom-2 -translate-y-1/2  hover:text-rose-500  hover:scale-105 opacity-0  group-focus-within:opacity-100  group-focus-within:ocursor-pointer "
          onClick={() => setSearchTerm("")}
        />
        <label className="sr-only" htmlFor="Enter Location">
          Enter Location
        </label>
      </div>
      {isLoading && searchTerm.length > 0 ? (
        <div className="p-2 my-2 cursor-pointer  snap-end bg-slate-300 text-indigo-700 rounded-lg transition-colors duration-100 ease-out flex justify-start items-center gap-3 ">
          <span className="animate-pulse font-medium mx-auto block">
            searching for your location...
          </span>
        </div>
      ) : (
        <div className=" ">
          {autocompleteRes?.length > 0 && drop ? (
            <ul
              ref={autoCompletRef}
              className=" w-full bg-white rounded-lg p-2 mt-2  shadow-lg absolute z-50 "
            >
              {autocompleteRes?.map((res) => (
                <li
                  onClick={() => {
                    setLocation(res.name, res.externalID);
                    setDrop(false);
                  }}
                  key={res.id}
                  className="p-2 cursor-pointer text-center snap-end hover:bg-slate-300 hover:text-indigo-400 rounded-lg transition-colors duration-100 ease-out flex justify-start items-center gap-3"
                >
                  <TbRoute className="text-indigo-400" />
                  {res.name}
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={`p-2 cursor-pointer text-center border bg-blue-300 mt-3  hover:bg-slate-300 rounded-lg transition-colors duration-100 ease-out  ${
                searchTerm.length > 3 &&
                isError &&
                !isLoading &&
                autocompleteRes.length === 0
                  ? "block"
                  : "hidden"
              }`}
            >
              Sorry Not Found 🥺
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
