import { Filters } from "../types";

export const getQueryPrams = (params: Filters): string => {
  const pramsKeys = Object.keys(params);
  return pramsKeys
    .map((key: any) => {
      if (typeof params[key as keyof Filters] === "object") {
        const obj = params[key as keyof Filters] as {
          min: number;
          max: number;
        }; // min and max values
        return `${key}min=${obj.min}&${key}max=${obj.max}`;
      } else {
        if (params[key as keyof Filters] !== undefined) {
          const q = key + "=" + params[key as keyof Filters];
          return `${q}`;
        } else return key + "=" + "";
      }
    })
    .join("&");
};
