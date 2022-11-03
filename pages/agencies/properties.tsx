import { useRouter } from "next/router";
import { useInfiniteQuery } from "react-query";
import PropertyListingCard from "../../components/propertyListing/PropertyListingCard";
import { getAgencyProperties } from "../../utilities/bayutAPI";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropertyCardSkelton from "../../components/layout/PropertyCardSkelton";
function PropertiesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      [slug],
      ({ pageParam = 1 }) => getAgencyProperties(pageParam, slug as string),
      {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 60 * 24 * 7,
        staleTime: 1000 * 60 * 60 * 24 * 7,
        getNextPageParam: (lastPage) => lastPage?.page,
        enabled: !!slug,
      }
    );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    if (router.isReady && !slug) {
      setTimeout(() => {
        router.push("/agencies/");
      }, 3000);
    }
  }, [router.isReady, slug]);

  console.log((isLoading && !data) || !router.isReady);
  return (
    <section className="flex flex-col mx-auto p-4 max-w-7xl md:p-7 ">
      {router.isReady && !slug && (
        <div className=" w-full h-screen flex flex-col text-red-400 items-center justify-center gap-3">
          <h2>There is No listed Properties for that agency 😟</h2>
          <h3>You Will be directed to the agencies list page in 3 seconds</h3>
        </div>
      )}
      {(isLoading && !data) || !router.isReady ? (
        <div className="space-y-2 my-2">
          <PropertyCardSkelton />
          <PropertyCardSkelton />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <hr className="my-5" />
          <h1 className=" text-xl md:text-3xl capitalize text-slate-800 mb-5 ">
            Properties in {slug} ({data?.pages[0]?.nbHits})
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
