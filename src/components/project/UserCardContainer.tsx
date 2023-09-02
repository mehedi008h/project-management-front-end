import { Box, Spinner } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";
import { User } from "../../domain/user";

interface Props {
    loading: boolean;
    users: User[] | undefined;
    btnText: string;
}

const UserCardContainer = ({ loading, users, btnText }: Props) => {
    return (
        <Box pb={5}>
            <SearchInput />
            {loading ? (
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
                            btnText={btnText}
                            user={user}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default UserCardContainer;
