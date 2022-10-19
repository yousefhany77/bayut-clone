import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { Filters } from "../../types";
interface Props {
  setState: (filters: (filter: Filters) => Filters) => unknown;
}

const data = {
  Apartment: 4,
  Townhouses: 16,
  Villas: 3,
  Penthouses: 18,
  Hotel_Apartments: 21,
  "Villa Compound": 19,
  "Residential Plot": 14,
  "Residential Floor": 12,
  "Residential Building": 17,
  Office: 5,
  Shop: 6,
  Warhouse: 7,
  "Labour camp": 9,
  "Commercial Villa": 25,
  "Bulk Units": 20,
  "Commercial Plot": 15,
  "Commercial Floor": 13,
  "Commercial Building": 10,
  Factory: 8,
  "Industrial Land": 22,
  "Mixed Use Land ": 23,
  Showroom: 24,
};
function DropDown({ setState }: Props) {
  const [drop, setDrop] = useState<boolean>(false);
  const [RESIDENTIAL_VALUES, setRESIDENTIAL_VALUES] = useState<
    [string, number][]
  >(Object.entries(data));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFilter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toString().toLowerCase();
    let values = RESIDENTIAL_VALUES;
    values = values.filter((value) => value[0].toLowerCase().includes(search));
    event.target.value === ""
      ? setRESIDENTIAL_VALUES(Object.entries(data))
      : setRESIDENTIAL_VALUES(() => values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setResidential = useCallback((Target: number) => {
    setState((filters) => ({
      ...filters,
      residential: Target,
    }));
    setDrop(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handler = (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.parentElement !== ulRef.current) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", (event) => handler(event));
    return () =>
      document.removeEventListener("mousedown", (event) => handler(event));
  }, []);
  return (
    <div className="cursor-pointer relative">
      <div className="border flex flex-col  justify-center gap-2  rounded-lg   focus-within:shadow-lg shadow-black focus-within:bg-white">
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex justify-between items-center  px-3 h-16  "
        >
          <input
            type="text"
            placeholder="Residential"
            className={`${
              drop && "cursor-auto"
            } cursor-pointer font-medium text-lg pl-1.5 bg-transparent outline-none  md:w-36  transition-all duration-200  ease-[cubic-bezier(.47,-0.98,.48,1.67)] focus:placeholder:text-gray-200 placeholder:text-black focus:w-full `}
            onFocus={() => setDrop(true)}
            onChange={(event) => handleFilter(event)}
            ref={inputRef}
          />
          <MdOutlineArrowDropDownCircle
            size={23}
            className={`text-gray-600  cursor-pointer ${
              !drop && "rotate-90"
            } transition-all duration-300  ease-in`}
            onClick={() => {
              setDrop(!drop);
              drop ? inputRef.current?.blur() : inputRef.current?.focus();
            }}
          />
        </div>
      </div>
      {drop && (
        <ul
          ref={ulRef}
          className=" w-full bg-white rounded-lg p-2 mt-2 max-h-40 overflow-scroll scroll-smooth snap-y shadow-lg absolute z-10"
        >
          {RESIDENTIAL_VALUES.length > 0 ? (
            RESIDENTIAL_VALUES.map((value: [string, number]) => (
              <li
                className="p-2 cursor-pointer text-center snap-end hover:bg-slate-300 rounded-lg transition-colors duration-100 ease-out"
                key={value[1]}
                onClick={() => {
                  setResidential(value[1]);
                  setDrop(false);
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  inputRef.current!.value = value[0];
                }}
              >
                {value[0].replace("_", " ")}
              </li>
            ))
          ) : (
            <li className="p-2 cursor-pointer text-center  hover:bg-slate-300 rounded-lg transition-colors duration-100 ease-out">
              Sorry Not Found 🥹
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default memo(DropDown);
