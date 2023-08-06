import { useState } from "react";
import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { CiMenuKebab, CiViewList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

import placeHolder from "../../assets/no-image-placeholder.webp";
import { BiMenuAltRight } from "react-icons/bi";
import { AssignedUserCard } from "..";

const ProjectDetailsCard = () => {
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
        <Box my={5} bg="blackAlpha.500" p={4} borderRadius="md">
            <Flex justify="space-between" alignItems="center">
                <Text>Project Identifier # 43534534</Text>
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
            </Flex>
            {/* modal  */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {developerModal ? "Assign Developer" : "Add Task"} 😎
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* {
                            developerModal ?
                                <UsersCard users={users} projectId={project?.projectIdentifier} loading={loading}/> :
                                <NewTask developers={project?.users} projectId={project?.projectIdentifier} onClose={onClose}/>
                        } */}
                        <AssignedUserCard />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Flex
                flexDirection={{
                    xl: "row",
                    lg: "row",
                    md: "row",
                    base: "column",
                }}
                gap={6}
                my={5}
                width="100%"
            >
                {/* image  */}
                <Box
                    width={{
                        xl: "450px",
                        lg: "450px",
                        md: "450px",
                        base: "100%",
                    }}
                    height="300px"
                >
                    <Image
                        src={placeHolder}
                        w="100%"
                        h="100%"
                        rounded="md"
                        objectFit="cover"
                    />
                </Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>Project Name</Text>
                    <Text mt={2} color="gray.300" fontSize="sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque eius adipisci, quasi voluptate neque iure!
                    </Text>
                    <Flex gap={4} my={4} flexWrap="wrap">
                        <Badge px={2} py={1}>
                            Spring Boot
                        </Badge>
                        <Badge px={2} py={1}>
                            Spring Boot
                        </Badge>
                    </Flex>

                    <Flex gap={3}>
                        <Flex align="center" gap={1}>
                            <RiAttachment2 />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Attachment
                            </Text>
                            (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <IoChatboxEllipsesOutline color="white" />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Message
                            </Text>{" "}
                            (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <CiViewList />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Task
                            </Text>{" "}
                            (20)
                        </Flex>
                    </Flex>

                    <Flex gap={4} my={4}>
                        <Badge px={2} py={1}>
                            <Flex alignItems="center" gap={2}>
                                <GiSandsOfTime size={15} />
                                12-12-12
                            </Flex>
                        </Badge>
                        <Badge px={2} py={1} colorScheme="green">
                            <Flex alignItems="center" gap={2}>
                                <MdOutlineTimer size={15} />
                                <Text textTransform="uppercase">12-12-12</Text>
                            </Flex>
                        </Badge>
                    </Flex>
                    <Box my={5}>
                        <Text>Assigned Developer</Text>
                        <AvatarGroup size="sm" max={4} mt={2}>
                            <Avatar name="Mehedi" />
                        </AvatarGroup>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsCard;
