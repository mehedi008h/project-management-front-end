import { Box, Flex } from "@chakra-ui/react";

import { ProjectAvatarGroup, ProjectSelector } from "..";
import useProjectLength from "../../hooks/useProjectLength";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";

const NavProject = () => {
    const { data: projects } = useProjectLength();
    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(projects?.[0].projectIdentifier as string);
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
                <ProjectAvatarGroup
                    size="sm"
                    loading={developerLoading}
                    developers={developers}
                />
            </Box>
        </Flex>
    );
};

export default NavProject;
