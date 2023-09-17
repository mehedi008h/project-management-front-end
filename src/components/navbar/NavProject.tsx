import { Box, Flex } from "@chakra-ui/react";

import { ProjectAvatarGroup, ProjectSelector } from "..";

const NavProject = () => {
    // const { data: developers, isLoading: developerLoading } =
    //     useProjectDeveloper(projects?.[0]?.projectIdentifier as string);

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
                <ProjectAvatarGroup size="sm" loading={false} />
            </Box>
        </Flex>
    );
};

export default NavProject;
