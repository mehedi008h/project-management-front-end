import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";

const UserCard = () => {
    return (
        <Flex
            flexDirection="row"
            alignItems="center"
            gap={4}
            bg="black"
            p={3}
            rounded="md"
            width="100%"
        >
            <Avatar name="M" size="xl" />
            <Box>
                <Text fontSize={20}>Mehedi Hasan</Text>
                <Text fontSize={14} color="gray.500" marginTop={-1}>
                    Software Engineer
                </Text>

                <HStack spacing={5} mt={2}>
                    <Flex
                        alignItems="center"
                        gap={1}
                        cursor="pointer"
                        _hover={{ color: "teal" }}
                    >
                        <AiOutlineMessage />
                        <Text fontSize={14}>(21)</Text>
                    </Flex>
                    <Flex
                        alignItems="center"
                        gap={1}
                        cursor="pointer"
                        _hover={{ color: "teal" }}
                    >
                        <BiGitBranch />
                        <Text fontSize={14}>(5)</Text>
                    </Flex>
                </HStack>
            </Box>
        </Flex>
    );
};

export default UserCard;
