import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteTask({ task, deleteTask }) {
  return (
    <>
      <IconButton
        icon={<FiTrash2 />}
        isRound="true"
        onClick={() => deleteTask(task.id)}
      />
    </>
  );
}

export { DeleteTask };
