import { memo, useState, useEffect, useRef } from "react";
import { CiCircleRemove, CiLocationArrow1 } from "react-icons/ci";
import { TbRoute } from "react-icons/tb";
import { Filters, Hit } from "../../types";
import * as bayut from "../../utilities/bayutAPI";
interface Props {
  setState: (filters: (filter: Filters) => Filters) => unknown;
}

function SearchFilter({ setState: setFilters }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [autocompleteRes, setAutocomplete] = useState<Hit[]>([]);
  const [drop, setDrop] = useState<boolean>(false);
  const autoCompletRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const setLocation = (locationName: string, locationId: string) => {
    setSelectedLocation(locationName);

    setAutocomplete([]);
    setFilters((filters) => ({
      ...filters,
      location: locationName,
      externalID: locationId,
    }));
  };
  useEffect(() => {
    const controller = new AbortController();

    const autocomplete = async () => {
      const hits = await bayut.search(searchTerm, controller.signal);
      if (hits?.length && Array.isArray(hits)) {
        setAutocomplete(hits);
      }
    };
    if (searchTerm.length > 2) autocomplete();
    return () => controller.abort();
  }, [searchTerm]);
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
        className="group border flex  items-center gap-2 px-3 h-16 rounded-lg  focus-within:shadow-lg shadow-black focus-within:bg-white relative"
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
      {drop && (
        <div className=" ">
          {autocompleteRes?.length > 0 ? (
            <ul
              ref={autoCompletRef}
              className=" w-full bg-white rounded-lg p-2 mt-2  shadow-lg absolute z-10 "
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
              className={`p-2 cursor-pointer text-center border bg-blue-300 mt-3  hover:bg-slate-300 rounded-lg transition-colors duration-100 ease-out hidden ${
                searchTerm.length > 1 && autocompleteRes?.length > 0 && "block"
              }`}
            >
              Sorry Not Found 🥹
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(SearchFilter);
