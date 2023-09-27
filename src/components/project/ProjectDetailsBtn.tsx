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

import { AlertDialog } from "..";
import useProjectDelete from "../../hooks/useProjectDelete";
import useProjectStore from "../../store/useProjectStore";
import { useNavigate } from "react-router-dom";
import useTaskStore from "../../store/useTaskStore";
import useUpdateProjectStore from "../../store/useUpdateProjectStore";
import useAssignDeveloperStore from "../../store/useAssignDeveloperStore";

const ProjectDetailsBtn = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onOpen: openTaskModal } = useTaskStore();
    const { onOpen: openUpdateProjectModal } = useUpdateProjectStore();
    const { onOpen: openAssignDeveloperModal } = useAssignDeveloperStore();

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
                    onClick={openAssignDeveloperModal}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Assign Developer
                </Button>
                <Button
                    onClick={openTaskModal}
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
                <Button onClick={onOpen} fontWeight="normal" fontSize={14}>
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

            {/* modal  deleteProject*/}

            <AlertDialog
                title="Delete Project ?"
                body="Your project will be deleted"
                isOpen={isOpen}
                onClose={onClose}
                handleAction={handleDelete}
                loading={isLoading}
            />
        </>
    );
};

export default ProjectDetailsBtn;
