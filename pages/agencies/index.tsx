import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function Agencies() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "todos",
    async ({ pageParam = 1 }) => {
      const { data: todos } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=50&page=${pageParam}`
      );
      return todos;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (_lastpage, pages) => {
        if (pages.length < 10) return pages.length + 1;
        else return undefined;
      },
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div>
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          <ul>
            {group.map((todo: any) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </Fragment>
      ))}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      { isFetchingNextPage && <p className="text-lg text-red-300">loading...</p>}
      <button className="bg-blue-500" onClick={() => fetchNextPage()}>
        Fetch
      </button>
    </div>
  );
}

export default Agencies;
