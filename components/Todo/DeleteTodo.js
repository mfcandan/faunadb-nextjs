import {Box, IconButton} from "@chakra-ui/react";
import {MdDelete} from "react-icons/md";
import {mutate} from "swr";

export const DeleteTodo = (value) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      };
      const deleteTodo = async(e) => {
        e.preventDefault();
        await fetch("/api/delete-todo", requestOptions)
      .then(() =>  mutate('/api/get-todos'))
      .catch((e) => console.log(e));
  };
    return(
        <Box>
            <IconButton
            variant="outline"
            border="none"
            color="blue.500"
            aria-label="delete"
            fontSize="20px"
            onClick={deleteTodo}
            icon={<MdDelete/>}/>
        </Box>
    )
}