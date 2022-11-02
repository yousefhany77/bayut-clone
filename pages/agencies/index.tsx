import { useInfiniteQuery } from "react-query";
import { getAgenciesList } from "../../utilities/bayutAPI";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Spinner from "../../components/layout/Spinner";
import AgencyCard from "../../components/agnecy/AgencyCard";
function PropertiesPage() {
  const [query, setQuery] = useState<string>("*");
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [query],
    ({ pageParam = 1 }) => getAgenciesList(query, pageParam),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24 * 2,
      staleTime: 1000 * 60 * 60 * 24,

      getNextPageParam: (lastPage) => lastPage?.page,
    }
  );
  const { ref, inView } = useInView();
  const agencyRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  if (data && !isLoading && data.pages[0]?.nbHits === 0) return <p>no data</p>;

  return (
    <section className="flex flex-col mx-auto p-4 max-w-7xl md:p-7 ">
      <form
        className="w-full"
        onSubmit={(event) => {
          event?.preventDefault();
          setQuery(agencyRef.current?.value || "*");
        }}
      >
        <label htmlFor="findAgency"></label>
        <input
          type="text"
          id="findAgency"
          placeholder="Find Agency"
          className="h-16 border bg-white shadow rounded-xl px-5 w-full"
          ref={agencyRef}
        />
        <button className="bg-yellow-400 w-full text-lg text-slate-50 my-2 h-12 rounded-xl hover:bg-yellow-600 transition-colors ease-out">Search</button>
      </form>
      <div className="w-full"></div>
      {isLoading && !data ? (
        <div className="space-y-2 my-2">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <hr className="my-5" />

          {data?.pages.map((page) =>
            page?.hits.map((agency) => (
              <AgencyCard key={agency.id} hasInfo agencyInfo={agency} />
            ))
          )}
          <span ref={ref} style={{ visibility: "hidden" }}>
            Scroll to Next Page
          </span>
        </div>
      )}
    </section>
  );
}

export default PropertiesPage;
