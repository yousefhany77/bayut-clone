import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function Agencies() {
  const { data, isLoading, isError, isFetched } = useQuery(
    "todos",
    async () => {
      const { data: todos } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return todos;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const queryClient = useQueryClient();
  const { data: user } = useQuery(
    ["user", "1"],
    async () => {
      const { data: user } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      return user;
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {data?.map((todo: any) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </div>
  );
}

export default Agencies;
