import { useState } from "react";
import { Button, GridItem, HStack, useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { AlertDialog, Modal, UpdateTask } from "..";
import useProjectStore from "../../store/useProjectStore";

interface Props {
    taskIdentifier?: string;
}

const TaskAction = ({ taskIdentifier }: Props) => {
    const [modalType, setModalType] = useState("");
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // store task identifier in zustand
    const project = useProjectStore();

    const handleModal = (type: string) => {
        if (taskIdentifier) project.taskId = taskIdentifier;
        onOpen();
        setModalType(type);
    };
    const handleDelete = () => {};
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
                    <Button
                        size="sm"
                        px={3}
                        onClick={() => handleModal("updateTask")}
                    >
                        <AiOutlineEdit color="yellow" />
                    </Button>
                    <Button size="sm" onClick={() => handleModal("deleteTask")}>
                        <AiOutlineDelete color="red" />
                    </Button>
                </HStack>
            </GridItem>
            {/* modal  assignTask*/}
            {modalType === "updateTask" && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size="2xl"
                    disabled={false}
                    title="Update Task"
                    body={<UpdateTask />}
                />
            )}
            {/* modal  deleteProject*/}
            {modalType === "deleteTask" && (
                <AlertDialog
                    title="Delete Task ?"
                    body="Your task will be deleted"
                    isOpen={isOpen}
                    onClose={onClose}
                    handleAction={handleDelete}
                    loading={true}
                />
            )}
        </>
    );
};

export default TaskAction;
