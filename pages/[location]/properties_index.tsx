import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import useSWR, { SWRConfig } from "swr";
import { Filters, PropertiesListing } from "../../types";
import { fetchProperties } from "../../utilities/bayutAPI";

interface Props {
  fallback: PropertiesListing[];
}
function PropertiesPage({ fallback }: Props) {
  const router = useRouter();
  const filters = router.query;
  const { data, error } = useSWR(router.asPath, () =>
    fetchProperties({
      ...filters,
      hitsPerPage: 25,
    })
  );
  if (!error && !data) {
    <pre>{JSON.stringify(router.query, null, 2)}</pre>;
  }
  return (
    <SWRConfig value={{ fallback }}>
      <pre>
        {data?.length}
        {JSON.stringify(data, null, 2)}
      </pre>
    </SWRConfig>
  );
}

export default PropertiesPage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const filters = context.query as Filters;
  const propertiesListed = await fetchProperties(filters);
  return {
    props: {
      fallback: {
        [context.resolvedUrl]: propertiesListed,
      },
    },
  };
};
