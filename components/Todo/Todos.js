import {Stack} from "@chakra-ui/react";
import {Todo} from "./Todo";
import useSWR from "swr";

export const Todos = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/get-todos', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
    console.log(data);
    return(
        <Stack spacing="5" justify="flex-start">
            {data?.todos.map((todo) => (
            <Todo key={todo.ts} todo={todo}/> 
            ))}
        </Stack>
    )
}