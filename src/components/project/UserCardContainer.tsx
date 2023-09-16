import { Box, Spinner } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";
import { User } from "../../domain/user";
import { SearchType } from "../../enums/search.enum";

interface Props {
    loading: boolean;
    users: User[] | undefined;
    btnText: string;
}

const UserCardContainer = ({ loading, users }: Props) => {
    return (
        <Box pb={5}>
            <SearchInput type={SearchType.USER} />
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
                        <AssignedUserCard key={user._id} user={user} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default UserCardContainer;
