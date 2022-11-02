import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Filters, SortingMethods } from "../../types";
interface Props {
  value: SortingMethods;
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
}
const sortMethods: SortingMethods[] = [
  "price-desc",
  "price-asc",
  "city-level-score",
  "date-desc",
  "verified-score",
];
function Sort({ setFilters, value }: Props) {
  const [sortMethod, setSortMethod] = useState<SortingMethods>(value);
  console.log(value);
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef(null);
  const pRef = useRef(null);
  useEffect(() => {
    const handler = (event: Event) => {
      const element = event.target as HTMLElement;
      console.log(element.parentElement);
      if (element.parentElement !== ulRef.current && element !== pRef.current) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", (event) => handler(event));
    return () =>
      document.removeEventListener("mousedown", (event) => handler(event));
  }, []);

  return (
    <div className=" min-w-[150px] bg-slate-200 rounded-lg  capitalize relative flex flex-col items-center z-10  ml-auto">
      <p
        ref={pRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer py-1.5 px-3 "
      >
        sort: {formatSortText(sortMethod)} <MdOutlineArrowDropDown />
      </p>
      {isOpen && (
        <ul
          ref={ulRef}
          className="absolute top-10 bg-slate-200 rounded-lg overflow-hidden w-full"
        >
          {sortMethods
            .filter((selectedValue) => selectedValue !== sortMethod)
            .map((value) => (
              <li
                onClick={() => {
                  setFilters((filters) => ({
                    ...filters,
                    sort: value,
                  }));
                  setSortMethod(value);
                  setIsOpen(false);
                }}
                key={value}
                className="py-1 text-center cursor-pointer hover:bg-slate-300 hover:text-indigo-400 hover:font-medium transition-all duration-150  ease-in-out"
              >
                {formatSortText(value)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;

const formatSortText = (method: SortingMethods) => {
  return method.replaceAll("-", " ");
};
