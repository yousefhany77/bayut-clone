import axios, { AxiosError, GenericAbortSignal } from "axios";
import { Filters, Hit, PropertiesListingResponse } from "../types";

export const bayutFetch = axios.create({
  baseURL: "https://bayut.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
});

export const search = async (
  location: string,
  Csignal: GenericAbortSignal | null | undefined
) => {
  try {
    const res = await bayutFetch.get("/auto-complete", {
      params: { query: location, hitsPerPage: "5", page: "0", lang: "en" },
      signal: Csignal as GenericAbortSignal,
    });
    const hits: Hit[] = res.data.hits;
    if (hits.length > 0) return hits;
    return [];
  } catch (err) {
    const error: AxiosError = err as AxiosError;
    if (error.name == "CanceledError") return;
    else console.log;
    if (error) {
      return error.message;
    }
  }
};

export const fetchProperties = async (filtersPrams: Filters) => {
  try {
    const { data } = await bayutFetch.get(`/properties/list`, {
      params: { ...filtersPrams, hitsPerPage: 5 } as Filters,
    });
    const response: PropertiesListingResponse = data;
    return response;
  } catch (error) {
    console.log(error);
  }
};
