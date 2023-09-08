import { Box, Spinner } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";
import useUsers from "../../hooks/useUsers";
import useUserStore from "../../store/useUserStore";
import { Types } from "../../enums/types.enum";

const InviteNewMember = () => {
    const { data: users, isLoading } = useUsers();

    // store type in store
    const userStore = useUserStore();
    if (users) userStore.type = Types.SEND;

    return (
        <Box pb={5}>
            <SearchInput />
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
                    {users?.map((user) => (
                        <AssignedUserCard key={user._id} user={user} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default InviteNewMember;
