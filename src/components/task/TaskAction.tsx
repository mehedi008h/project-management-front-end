import { Button, GridItem, HStack, useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { AlertDialog, UpdateTaskModal } from "..";
import useProjectStore from "../../store/useProjectStore";
import useTaskDelete from "../../hooks/useTaskDelete";
import useTaskStore from "../../store/useTaskStore";

interface Props {
    taskIdentifier?: string;
}

const TaskAction = ({ taskIdentifier }: Props) => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onOpenUpdate } = useTaskStore();
    const { mutate, isLoading } = useTaskDelete(taskIdentifier!);

    // store task identifier in zustand
    const project = useProjectStore();

    const handleUpdate = () => {
        if (taskIdentifier) project.taskId = taskIdentifier;
        onOpenUpdate();
    };

    // delete task by project leader
    const handleDelete = () => {
        mutate();
        onClose();
    };
    return (
        <>
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <HStack fontFamily="monospace" fontSize={14}>
                    <Button size="sm" px={3} onClick={handleUpdate}>
                        <AiOutlineEdit color="yellow" />
                    </Button>
                    <Button size="sm" onClick={onOpen}>
                        <AiOutlineDelete color="red" />
                    </Button>
                </HStack>
            </GridItem>

            {/* modal  deleteProject*/}
            <AlertDialog
                title="Delete Task ?"
                body="Your task will be deleted"
                isOpen={isOpen}
                onClose={onClose}
                handleAction={handleDelete}
                loading={isLoading}
            />
            <UpdateTaskModal />
        </>
    );
};

export default TaskAction;
