import React from "react";
import { useQuery } from "react-query";
import { Filters } from "../types";
import { fetchProperties } from "../utilities/bayutAPI";

interface Props {
  filters: Filters;
}
function usePropertiesListingData({ filters }: Props) {
  const { data, isLoading } = useQuery("uae", () => fetchProperties(filters), {
    enabled: !!filters.location,
  });
  return;
}

export default usePropertiesListingData;
