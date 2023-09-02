import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { User } from "../../domain/user";
import useProjectStore from "../../store/useProjectStore";
import useAssignDeveloper from "../../hooks/useAssignDeveloper";
import { toast } from "react-hot-toast";

interface Props {
    btnText: string;
    user?: User;
}

const AssignedUserCard = ({ btnText, user }: Props) => {
    // get project identifier from zustand store
    const projectId = useProjectStore();
    console.log("Project Ids: " + projectId.projectId);
    const { mutate, error, isLoading, data } = useAssignDeveloper(
        projectId.projectId
    );

    if (error) toast.error(error.message);

    const handleAction = () => {
        mutate(user as User);
    };
    console.log("Assign Data:", data);

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
                <Button
                    size="sm"
                    variant="outline"
                    onClick={handleAction}
                    isLoading={isLoading}
                >
                    {btnText}
                </Button>
            </Flex>
        </Stack>
    );
};

export default AssignedUserCard;
