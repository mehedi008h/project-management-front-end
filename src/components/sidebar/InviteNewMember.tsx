import { Box, Spinner } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";
import useUsers from "../../hooks/useUsers";
import { toast } from "react-hot-toast";

const InviteNewMember = () => {
    const { data: users, isLoading, error } = useUsers();

    if (error) toast.error(error.message);

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
                        <AssignedUserCard
                            key={user.id}
                            btnText="Invite"
                            user={user}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default InviteNewMember;
