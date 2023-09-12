import { Box, Button, Spinner } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";
import useUsers from "../../hooks/useUsers";
import useUserStore from "../../store/useUserStore";
import { Types } from "../../enums/types.enum";
import React from "react";
import { IoReloadCircleOutline } from "react-icons/io5";

const InviteNewMember = () => {
    const { data, isLoading, fetchNextPage, isFetchingNextPage } = useUsers();

    // store type in store
    const userStore = useUserStore();
    if (data) userStore.type = Types.SEND;

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
                    width="100%"
                >
                    {data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page?.map((user) => (
                                <AssignedUserCard key={user._id} user={user} />
                            ))}
                        </React.Fragment>
                    ))}
                    <Box textAlign="center">
                        <Button
                            disabled={isFetchingNextPage}
                            onClick={() => fetchNextPage()}
                            mt={3}
                            rounded="full"
                            size="sm"
                        >
                            {isFetchingNextPage ? (
                                <Spinner color="red" size="sm" />
                            ) : (
                                <IoReloadCircleOutline size={20} />
                            )}
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default InviteNewMember;
