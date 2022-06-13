import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Box,
    Heading
} from "@chakra-ui/react";
import useSWR from "swr";

export const CompletedTodos = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/get-completed', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);
    return(
        <Box as="section" py="12">
         <Box 
            maxW={{
                base: "xl",
                md: "7xl"
            }}   
            mx="auto"
            px={{
                base: "6",
                md: "8",
            }}>
            <Box overflowX="auto">
                <Heading size="lg" mb="6">
                    Thing you have done!
                </Heading>
                <Table my="8" borderWidth="1px" fontSize="sm">
                    <Thead bg="gray.50">
                        <Tr>
                            <Th whiteSpace="nowrap" scope="col">
                                Title
                            </Th>
                            <Th whiteSpace="nowrap" scope="col">
                                Note
                            </Th>
                            <Th whiteSpace="nowrap" scope="col">
                                Completed At
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {data?.todos?.map((todo) => (
                            <Tr key={todo.ts}>
                            <Td>{todo.data.title}</Td>
                            <Td>{todo.data.note}</Td>
                            <Td>{new Date(todo.data.updated_at).toLocaleDateString()}</Td>
                        </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            </Box>
        </Box>
    )
}