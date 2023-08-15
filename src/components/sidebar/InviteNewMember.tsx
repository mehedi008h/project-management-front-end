import { Box } from "@chakra-ui/react";
import { AssignedUserCard, SearchInput } from "..";

const InviteNewMember = () => {
    return (
        <Box pb={5}>
            <SearchInput />
            <Box mt={2}>
                <AssignedUserCard btnText="Invite" />
                <AssignedUserCard btnText="Invite" />
                <AssignedUserCard btnText="Invite" />
            </Box>
        </Box>
    );
};

export default InviteNewMember;
