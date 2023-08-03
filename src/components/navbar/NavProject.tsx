import { Box, Flex } from "@chakra-ui/react";

import { ProjectAvatarGroup, ProjectSelector } from "..";

const NavProject = () => {
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            gap={5}
        >
            <Box w="100%">
                <ProjectSelector />
            </Box>
            <Box>
                <ProjectAvatarGroup />
            </Box>
        </Flex>
    );
};

export default NavProject;
