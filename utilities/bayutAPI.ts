/* istanbul ignore file */
import axios, { AxiosError, GenericAbortSignal } from "axios";
import { AgencyResponse } from "../components/agnecy/agnecyTypes";
import { PropertyDetails } from "../components/propertyDetails/types";
import { Filters, Hit, PropertiesListingResponse } from "../types";

export const bayutFetch = axios.create({
  baseURL: "https://apiv2.youssefhany.xyz",
});

export const search = async (
  location: string,
  Csignal: GenericAbortSignal | null | undefined
) => {
  try {
    const { data } = await bayutFetch.get("/auto-complete", {
      params: { location },
      signal: Csignal as GenericAbortSignal,
    });
    const hits: Hit[] = data.hits;
    if (hits.length > 0) return hits;
    return [];
  } catch (err) {
    const error: AxiosError = err as AxiosError;
    if (error.name == "CanceledError") return;
    else console.log;
    if (error) {
      console.log(error.message);
      // window.location.href += `/temporary-down`;
    }
  }
};

export const fetchProperties = async (filtersPrams: Filters) => {
  console.log(filtersPrams.page);
  try {
    const { data } = await bayutFetch.get(`/properties/list`, {
      params: filtersPrams,
    });
    return data as PropertiesListingResponse;
  } catch (error) {
    console.log(error);
  }
};

export const getPropertDetails = async (id: string) => {
  if (id === undefined) throw new Error("Id is required");
  try {
    const { data } = await bayutFetch.get("/properties/details", {
      params: { externalID: id },
    });
    return data as PropertyDetails;
  } catch (error) {
    console.error(error);
  }
};

export const getAgencyDetails = async (name: string) => {
  if (!name) throw new Error("Name is required");
  try {
    const { data }: { data: AgencyResponse } = await bayutFetch.get(
      "/agencies/list",
      {
        params: { query: name },
      }
    );
    return data.hits[0];
  } catch (err) {
    console.error(err);
  }
};

export const getAgenciesList = async (q = "*", page = 1) => {
  console.log(page);
  try {
    const { data }: { data: AgencyResponse } = await bayutFetch.get(
      "/agencies/list",
      {
        params: { query: q, page: page },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getAgencyProperties = async (page: number, agencySlug: string) => {
  try {
    const { data } = await bayutFetch.get(`/agencies/get-listings`, {
      params: { page, agencySlug },
    });
    const response: PropertiesListingResponse = data;
    return response;
  } catch (error) {
    console.log(error);
  }
};
