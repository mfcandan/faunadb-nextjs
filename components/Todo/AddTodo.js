import {
  Box,
  Button,
  Input,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import {mutate} from "swr";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: { title: title, note: note } }),
  };

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleNoteChange = (event) => setNote(event.target.value);
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await fetch("/api/add-todo", requestOptions)
      .then(() => mutate('/api/get-todos'), setNote(""), setTitle(""), setLoading(false))
      .catch((e) => console.log(e));
  };
  return (
    <Accordion allowToggle mb="8" mt="2">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Add Todo
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb="4">
          <form onSubmit={onSubmit}>
            <Input
              value={title}
              onChange={handleTitleChange}
              placeholder="Add new title"
              my={4}
            />
            <Input
              value={note}
              onChange={handleNoteChange}
              placeholder="Add a new note"
              my={4}
            />
            <Button
              bg="blue.500"
              color="white"
              type="submit"
              isLoading={loading}
              disabled={title === "" || note === ""}
            >
              Add Todo
            </Button>
          </form>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
