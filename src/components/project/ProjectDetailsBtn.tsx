import { useState } from "react";
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

import { AlertDialog, Modal, UserCardContainer } from "..";
import NewTask from "../task/NewTask";
import { toast } from "react-hot-toast";
import useTeammates from "../../hooks/useTeammates";

const ProjectDetailsBtn = () => {
    const [modalType, setModalType] = useState("");
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data: users, isLoading, error } = useTeammates();

    if (error) toast.error(error.message);

    const handleModal = (type: string) => {
        onOpen();
        setModalType(type);
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
                    onClick={() => handleModal("assignDeveloper")}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Assign Developer
                </Button>
                <Button
                    onClick={() => handleModal("assignTask")}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Add Task
                </Button>
                <Button fontWeight="normal" fontSize={14}>
                    Update Project
                </Button>
                <Button
                    onClick={() => handleModal("deleteProject")}
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

            {/* modal  assignDeveloper*/}
            {modalType === "assignDeveloper" && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    disabled={false}
                    title="Assign Developer"
                    body={
                        <UserCardContainer
                            users={users}
                            loading={isLoading}
                            btnText="Assign"
                        />
                    }
                />
            )}
            {/* modal  assignTask*/}
            {modalType === "assignTask" && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size="2xl"
                    disabled={false}
                    title="Assign Task"
                    body={<NewTask />}
                />
            )}
            {/* modal  deleteProject*/}
            {modalType === "deleteProject" && (
                <AlertDialog
                    title="Delete Project ?"
                    body="Your project will be deleted"
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
        </>
    );
};

export default ProjectDetailsBtn;
