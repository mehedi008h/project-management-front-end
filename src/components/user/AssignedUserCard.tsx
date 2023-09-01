import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { User } from "../../domain/user";

interface Props {
    btnText: string;
    user?: User;
}

const AssignedUserCard = ({ btnText, user }: Props) => {
    return (
        <Stack spacing={2} my={2}>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                px={2}
                py={2}
                rounded="md"
                _hover={{ bg: "blackAlpha.400" }}
            >
                <Flex alignItems="center" gap={2}>
                    <Avatar name={user?.firstName} />
                    <Box>
                        <Flex alignItems="center" gap={1}>
                            <Text>
                                {`${user?.firstName}  ${user?.lastName}`}
                            </Text>
                            <Text fontSize={12} color="gray.500">
                                (@{user?.username})
                            </Text>
                        </Flex>
                        <Text fontSize={13} color="gray.500">
                            {user?.email}
                        </Text>
                    </Box>
                </Flex>
                <Button size="sm" variant="outline">
                    {btnText}
                </Button>
            </Flex>
        </Stack>
    );
};

export default AssignedUserCard;
