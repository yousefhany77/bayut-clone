import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Filters } from "../../types";
import { fetchProperties } from "../../utilities/bayutAPI";

function PropertiesPage() {
  const router = useRouter();
  const filters = router.query as Filters;
  console.log(filters.location);
  const { data, isLoading } = useQuery("uae", () => fetchProperties(filters), {
    enabled: !!filters.location,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <pre>{JSON.stringify(data?.hits, null, 2)}</pre>;
}

export default PropertiesPage;
