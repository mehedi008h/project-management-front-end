import React from "react";
import { Box, Button, Spinner } from "@chakra-ui/react";
import useTeammates from "../../hooks/useTeammates";
import { AssignedUserCard, Modal, SearchInput } from "..";
import useUserStore from "../../store/useUserStore";
import { Types } from "../../enums/types.enum";
import { SearchType } from "../../enums/search.enum";
import { IoReloadCircleOutline } from "react-icons/io5";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AssignDeveloperModal = ({ isOpen, onClose }: Props) => {
    const { data, isLoading, fetchNextPage, isFetchingNextPage } =
        useTeammates();

    // store type in store
    const userStore = useUserStore();
    if (data) userStore.type = Types.ASSIGN;

    const body = (
        <Box pb={5}>
            <SearchInput type={SearchType.DEVELOPER} />
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

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            disabled={isLoading}
            loading={isLoading}
            title="Assign Developer"
            body={body}
        />
    );
};

export default AssignDeveloperModal;
