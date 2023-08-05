import { useState } from "react";
import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { CiViewList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

import placeHolder from "../../assets/no-image-placeholder.webp";

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
            <Flex justify="space-between">
                <Text>Project Identifier # 43534534</Text>
                <ButtonGroup size="sm" isAttached variant="outline">
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
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Flex gap={6} my={5} width="100%">
                {/* image  */}
                <Box width="450px" height="300px">
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
                    <Flex gap={4} my={4}>
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
                            Attachment (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <IoChatboxEllipsesOutline color="white" />
                            Message (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <CiViewList />
                            Task (20)
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
