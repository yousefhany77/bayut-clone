import { Filters } from "../types";

export const getQueryPrams = (params: Filters): string => {
  const pramsKeys = Object.keys(params);
  const values = pramsKeys.map((key: any) => {
    if (typeof params[key as keyof Filters] === "object") {
      const minMaxobjKey = params[key as keyof Filters] as {
        Min: number;
        Max: number;
      }; // min and max values

      if (minMaxobjKey.Min > 0 && minMaxobjKey.Max > 0) {
        return `${key}Min=${minMaxobjKey.Min}&${key}Max=${minMaxobjKey.Max}`;
      } else if (minMaxobjKey.Max > 0) {
        return `${key}Max=${minMaxobjKey.Max}`;
      } else if (minMaxobjKey.Min > 0) {
        return `${key}Min=${minMaxobjKey.Min}`;
      }
    } else {
      if (params[key as keyof Filters] !== undefined) {
        const q = key + "=" + params[key as keyof Filters];
        return `${q}`;
      }
    }
  });

  return values.filter((q) => q !== undefined).join("&");
};
