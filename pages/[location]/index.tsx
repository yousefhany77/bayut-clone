import { useRouter } from "next/router";
import { useInfiniteQuery } from "react-query";
import PropertFilters from "../../components/propertyListing/PropertyFilters";
import PropertyListingCard from "../../components/propertyListing/PropertyListingCard";
import { Filters, PropertiesListingResponse } from "../../types";
import { fetchProperties } from "../../utilities/bayutAPI";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropertyCardSkelton from "../../components/layout/PropertyCardSkelton";
function PropertiesPage() {
  const router = useRouter();
  const filters = router.query as Filters;
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      Object.values(filters),
      ({ pageParam = 1 }) => fetchProperties({ ...filters, page: pageParam }),
      {
        enabled: router.isReady,
        cacheTime: 1000 * 60 * 60 * 24 * 7,
        staleTime: 1000 * 60 * 60 * 24 * 1,
        getNextPageParam: (currpage) => {
          const page = currpage as PropertiesListingResponse;
          return page.page === page?.nbPages ? undefined : page.page + 1;
        },
      }
    );
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (data && !isLoading && data.pages[0]?.nbHits === 0) return <p>no data</p>;
  return (
    <section className="flex flex-col mx-auto p-4 max-w-7xl md:p-7 ">
      <div className="w-full"></div>
      {isLoading && !data ? (
        <div className="space-y-2 my-2">
          <PropertyCardSkelton />
          <PropertyCardSkelton />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <PropertFilters />
          <hr className="my-5" />
          <h1 className=" text-xl md:text-3xl capitalize text-slate-800 mb-5 ">
            Properties {filters.purpose?.replace("-", " ")} in{" "}
            {filters.location} ({data?.pages[0]?.nbHits})
          </h1>
          {data?.pages.map((page) =>
            page?.hits.map((property) => (
              <PropertyListingCard
                key={property.id}
                propertyDetails={property}
              />
            ))
          )}
          <span ref={ref} style={{ visibility: "hidden" }}>
            Scroll to Next Page
          </span>
        </div>
      )}
      {isFetchingNextPage && (
        <div className="space-y-2">
          <PropertyCardSkelton />
          <PropertyCardSkelton />
        </div>
      )}
    </section>
  );
}

export default PropertiesPage;
