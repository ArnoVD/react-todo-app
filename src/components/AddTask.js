import { useState } from "react";
import { Button, HStack, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = content.trim();

    if (!taskText) {
      return setContent("");
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    addTask(task);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          h="46"
          variant="filled"
          placeholder="Enter your task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme="twitter"
          px="8"
          pl="10"
          pr="10"
          h="46"
          type="submit"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
