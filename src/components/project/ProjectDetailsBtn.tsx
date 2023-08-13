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

import { AssignedUserCard, Modal } from "..";
import NewTask from "../task/NewTask";

const ProjectDetailsBtn = () => {
    const [developerModal, setDeveloperModal] = useState(false);
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleModal = (type: string) => {
        onOpen();
        if (type === "task") {
            setDeveloperModal(false);
        } else {
            setDeveloperModal(true);
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
                    onClick={() => handleModal("developer")}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Assign Developer
                </Button>
                <Button
                    onClick={() => handleModal("task")}
                    fontWeight="normal"
                    fontSize={14}
                >
                    Add Task
                </Button>
                <Button fontWeight="normal" fontSize={14}>
                    Update Project
                </Button>
                <Button fontWeight="normal" fontSize={14}>
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
            {/* modal  */}
            {developerModal ? (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    disabled={false}
                    title="Assign Developer"
                    body={<AssignedUserCard />}
                />
            ) : (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size="2xl"
                    disabled={false}
                    title="Assign Task"
                    body={<NewTask />}
                />
            )}
        </>
    );
};

export default ProjectDetailsBtn;
