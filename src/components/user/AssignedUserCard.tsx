import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { User } from "../../domain/user";
import useSendInvitation from "../../hooks/useSendInvitation";
import useUserStore from "../../store/useUserStore";
import { Types } from "../../enums/types.enum";
import useAuth from "../../hooks/useAuth";
import useUnsendInvitation from "../../hooks/useUnsendInvitation";
import useAcceptRequest from "../../hooks/useAcceptRequest";
import useProjectStore from "../../store/useProjectStore";
import useAssignDeveloper from "../../hooks/useAssignDeveloper";
import useProject from "../../hooks/useProject";
import useRemoveDeveloper from "../../hooks/useRemoveDeveloper";

interface Props {
    user?: User;
}

const AssignedUserCard = ({ user }: Props) => {
    // store type in store
    const userStore = useUserStore();
    const projectStore = useProjectStore();

    // get project details
    const { data: projectDetails, isLoading: projectLoading } = useProject(
        projectStore.projectId!
    );

    const { data: me } = useAuth();
    // send invitation to user
    const { mutate: sendInvitation, isLoading: sendLoading } =
        useSendInvitation();
    // unsend invitation to user
    const { mutate: unsendInvitation, isLoading: unsendLoading } =
        useUnsendInvitation();
    // accept invitation
    const { mutate: acceptInvitation, isLoading: acceptLoading } =
        useAcceptRequest();

    // assign developers
    const { mutate: assignDeveloper, isLoading: assignLoading } =
        useAssignDeveloper(projectStore.projectId);

    // remove developers
    const { mutate: removeDeveloper, isLoading: removeLoading } =
        useRemoveDeveloper(projectStore.projectId);

    const handleAction = (action: string) => {
        // invite send & unsend
        if (userStore.type === Types.SEND) {
            if (action === Types.SEND) {
                sendInvitation(user as User);
            } else {
                unsendInvitation(user as User);
            }
        }

        // accept invite
        if (userStore.type === Types.ACCEPT) {
            if (action === Types.ACCEPT) {
                acceptInvitation(user as User);
            }
        }

        // assign & remove developer from project
        if (userStore.type === Types.ASSIGN) {
            if (action === Types.ASSIGN) {
                assignDeveloper(user as User);
            }
            if (action === Types.REMOVE) {
                removeDeveloper(user as User);
            }
        }
    };

    // all loader
    const loading =
        sendLoading ||
        unsendLoading ||
        acceptLoading ||
        assignLoading ||
        projectLoading ||
        removeLoading;

    // btn text selection
    let btnText: string = "";

    // send & undend invite
    if (userStore.type === Types.SEND) {
        btnText =
            me && user?.invitations.includes(me.userIdentifier)
                ? Types.UNSEND
                : Types.SEND;
    }

    // accept invitation
    if (userStore.type === Types.ACCEPT) {
        btnText = Types.ACCEPT;
    }

    // assign & remove developer
    if (userStore.type === Types.ASSIGN) {
        btnText = projectDetails?.developers?.includes(user?._id as string)
            ? Types.REMOVE
            : Types.ASSIGN;
    }
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
                    isLoading={loading}
                    onClick={() => handleAction(btnText)}
                >
                    {btnText}
                </Button>
            </Flex>
        </Stack>
    );
};

export default AssignedUserCard;
