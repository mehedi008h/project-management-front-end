import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

import { AlertDialog, AssignDeveloperModal, AssignTaskModal } from "..";
import useProjectDelete from "../../hooks/useProjectDelete";
import useProjectStore from "../../store/useProjectStore";
import { useNavigate } from "react-router-dom";
import useUpdateProjectStore from "../../store/useUpdateProjectStore";
import { useState } from "react";

enum ModalType {
    ADD_DEVELOPER = "addDeveloper",
    ADD_Task = "addTask",
    DELETE_PROJECT = "deleteProject",
}

const ProjectDetailsBtn = () => {
    const [type, setType] = useState<string>("");
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onOpen: openUpdateProjectModal } = useUpdateProjectStore();

    // get project identifier from zustand
    const projectStore = useProjectStore();

    // delete project
    const { mutate, isLoading } = useProjectDelete(projectStore.projectId);
    const navigate = useNavigate();

    const handleDelete = () => {
        mutate();
        if (!isLoading) {
            navigate("/projects");
            onClose();
        }
    };

    const handleModal = (type: string) => {
        setType(type);
        onOpen();
    };

    return (
        <>
            <ButtonGroup
                display={{
                    xl: "block",
                    lg: "block",
                    md: "block",
                    base: "none",
                }}
                size="sm"
                isAttached
                variant="outline"
            >
                <Button
                    onClick={() => handleModal(ModalType.ADD_DEVELOPER)}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Assign Developer
                </Button>
                <Button
                    onClick={() => handleModal(ModalType.ADD_Task)}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Add Task
                </Button>
                <Button
                    onClick={openUpdateProjectModal}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Update Project
                </Button>
                <Button
                    onClick={() => handleModal(ModalType.DELETE_PROJECT)}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Delete Project
                </Button>
            </ButtonGroup>
            <Box
                display={{
                    xl: "none",
                    lg: "none",
                    md: "none",
                    base: "block",
                }}
            >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<BiMenuAltRight />}
                        variant="unstyled"
                    />
                    <MenuList>
                        <MenuItem icon={<CiMenuKebab />} command="⌘T">
                            New Tab
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            {/* modal  assign developer*/}
            {type === ModalType.ADD_DEVELOPER && (
                <AssignDeveloperModal isOpen={isOpen} onClose={onClose} />
            )}
            {/* modal  assign developer*/}
            {type === ModalType.ADD_Task && (
                <AssignTaskModal isOpen={isOpen} onClose={onClose} />
            )}
            {/* modal  deleteProject*/}
            {type === ModalType.DELETE_PROJECT && (
                <AlertDialog
                    title="Delete Project ?"
                    body="Your project will be deleted"
                    isOpen={isOpen}
                    onClose={onClose}
                    handleAction={handleDelete}
                    loading={isLoading}
                />
            )}
        </>
    );
};

export default ProjectDetailsBtn;
