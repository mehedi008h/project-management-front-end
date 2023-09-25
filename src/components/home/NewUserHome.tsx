import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FormHeading, Navbar } from "..";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { TbMoodEdit } from "react-icons/tb";
import { BsSendPlus } from "react-icons/bs";
import useProjectStore from "../../store/useProjectStore";
import useUserStore from "../../store/useUserStore";
import useInviteStore from "../../store/useInviteStore";

const NewUserHome = () => {
    const { onOpen: projectModalOpen } = useProjectStore();
    const { onOpen: updateUserModalOpen } = useUserStore();
    const { onOpen: inviterModalOpen } = useInviteStore();
    return (
        <Box width="100%" h="100vh" className="profile_bg">
            <Navbar />
            <VStack
                w={{ base: "80%", lg: "50%", md: "50%", xl: "50%" }}
                marginX="auto"
                justifyContent="start"
                justify="start"
                alignItems="start"
                mt={12}
            >
                <FormHeading
                    title="Welcome to Genius"
                    textSize="4xl"
                    subtitle="Enjoy your exprience with genius"
                />
                <Box my={8}>
                    <FormHeading title="Start" textSize="xl" />
                    <VStack spacing={3} alignItems="start">
                        <Flex
                            onClick={projectModalOpen}
                            color="gray.400"
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                            mt={2}
                            cursor="pointer"
                            _hover={{
                                color: "maroon",
                            }}
                        >
                            <MdOutlineCreateNewFolder size={25} />
                            <Text>Create Project</Text>
                        </Flex>
                        <Flex
                            onClick={updateUserModalOpen}
                            color="gray.400"
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                            mt={2}
                            cursor="pointer"
                            _hover={{
                                color: "maroon",
                            }}
                        >
                            <TbMoodEdit size={25} />
                            <Text>Update Profile</Text>
                        </Flex>
                        <Flex
                            onClick={inviterModalOpen}
                            color="gray.400"
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                            mt={2}
                            cursor="pointer"
                            _hover={{
                                color: "maroon",
                            }}
                        >
                            <BsSendPlus size={25} />
                            <Text>Make Teammate</Text>
                        </Flex>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default NewUserHome;
