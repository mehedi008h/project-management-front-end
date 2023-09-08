import { Box, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import { FcInvite } from "react-icons/fc";
import { AssignedUserCard, Empty, Modal } from "..";
import useInvitations from "../../hooks/useInvitations";
import useUserStore from "../../store/useUserStore";
import { Types } from "../../enums/types.enum";

const Invitation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: users, isLoading } = useInvitations();

    // store type in store
    const userStore = useUserStore();
    if (users) userStore.type = Types.ACCEPT;

    // modal body
    const body = (
        <Box>
            {isLoading ? (
                <Box w="100%" textAlign="center">
                    <Spinner color="red" mt={10} />
                </Box>
            ) : (
                <Box
                    className="hide-scroll-bar"
                    mt={2}
                    maxHeight="60vh"
                    overflowY="scroll"
                >
                    {users?.length === 0 && <Empty text="No Invitations" />}
                    {users?.map((user) => (
                        <AssignedUserCard key={user._id} user={user} />
                    ))}
                </Box>
            )}
        </Box>
    );
    return (
        <>
            <Flex
                onClick={onOpen}
                alignItems="center"
                gap={3}
                flex={1}
                fontWeight="medium"
                cursor="pointer"
                padding={3}
                color="gray.400"
                rounded="md"
                width="100%"
                _hover={{
                    color: "white",
                    backgroundColor: "#121212",
                }}
                transition="all"
            >
                <FcInvite size={22} />
                Invitation
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                disabled={false}
                title="Invitation"
                body={body}
            />
        </>
    );
};

export default Invitation;
