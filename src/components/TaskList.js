import React from "react";
import UpdateTask from "./UpdateTask";
import { DeleteTask } from "./DeleteTask";
import { HStack, VStack, Text, StackDivider } from "@chakra-ui/react";

function TaskList({ tasks, updateTask, deleteTask, checkTask }) {
  if (!tasks.length) {
    return <h1>Currently no task's to display..</h1>;
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        {tasks.map((task) => (
          <HStack key={task.id} opacity={task.check === true ? "0.2" : "1"}>
            <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              as={task.check === true ? "s" : ""}
              cursor="pointer"
              onClick={() => checkTask(task.id)}
            >
              {task.body}
            </Text>
            <DeleteTask task={task} deleteTask={deleteTask} /> {/* Voeg hier je component toe */}
            <UpdateTask task={task} updateTask={updateTask} />
          </HStack>
        ))}
      </VStack>
    </>
  );
}

export default TaskList;
