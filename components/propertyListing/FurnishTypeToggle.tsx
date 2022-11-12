import { Filters, furnished } from "../../types";
interface Props {
  filters: Filters;
  setFilters: (filters: (filter: Filters) => Filters) => unknown;
}
function FurnishTypeToggle({ filters, setFilters }: Props) {
  return (
    
      
      <div className="flex h-10 bg-slate-200 rounded-lg overflow-hidden ">
        {["All", "Furnished", "Unfurnished"].map((value, i) => (
          <span
            className={`cursor-pointer py-1.5 px-2.5 transition-colors duration-150 ease-in-out ${
              filters.furnished === value.toLowerCase()
                ? "bg-indigo-500 text-white"
                : "bg-transparent "
            }  `}
            key={i}
            onClick={() => {
              setFilters((filters) => ({
                ...filters,
                furnished: value.toLowerCase() as furnished,
              }));
            }}
          >
            {value}
          </span>
        ))}
      </div>
   
  );
}

export default FurnishTypeToggle;
