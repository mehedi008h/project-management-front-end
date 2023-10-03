import { Box, Button, Flex, Spinner } from "@chakra-ui/react";

import { ProjectAvatarGroup, SelectOption } from "..";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";
import React, { useState } from "react";
import useProjects from "../../hooks/useProjects";
import { IoReloadCircleOutline } from "react-icons/io5";
import useTaskStore from "../../store/useTaskStore";
import useProject from "../../hooks/useProject";
import { Project } from "../../domain/project";
import placeHolder from "../../assets/no-image-placeholder.webp";

const NavProject = () => {
    // state
    const [toogle, setToogle] = useState<boolean>(false);
    const [showDeveloper, setShowDeveloper] = useState<boolean>(false);

    // fetch project identifier from project store
    const projectIdentifier = useTaskStore((s) => s.projectIdentifier);

    // fetch selected project developer
    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(projectIdentifier);

    // fetch selected project details
    const { data: project, isLoading: projectLoading } =
        useProject(projectIdentifier);

    // fetch projects
    const { data, isLoading, fetchNextPage, isFetchingNextPage } =
        useProjects();

    const sample: Project = {
        title: "All Project",
        _id: "",
        projectIdentifier: "",
        description: "",
        startDate: "",
        endDate: "",
        photo: {
            publicId: "",
            url: placeHolder,
        },
        projectLeader: "",
        tags: [],
        developers: [],
        tasks: [],
        status: "",
        createdAt: "",
    };

    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            gap={5}
            position="relative"
            onClick={() => setToogle(!toogle)}
        >
            <Flex w="100%">
                <SelectOption
                    select={true}
                    setShowDeveloper={setShowDeveloper}
                    project={projectIdentifier ? project : sample}
                />
                {showDeveloper && (
                    <ProjectAvatarGroup
                        size="sm"
                        loading={developerLoading || projectLoading}
                        developers={developers}
                    />
                )}
            </Flex>
            {toogle && (
                <>
                    <Flex
                        py={4}
                        bg="black"
                        w="fit-content"
                        position="absolute"
                        top={"16"}
                        rounded="md"
                        zIndex={6}
                        flexDir="column"
                        gap={1}
                    >
                        <SelectOption
                            select={true}
                            setShowDeveloper={setShowDeveloper}
                        />
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page?.map((project) => (
                                    <SelectOption
                                        key={project._id}
                                        project={project}
                                        setShowDeveloper={setShowDeveloper}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                        <Box textAlign="center">
                            <Button
                                disabled={isFetchingNextPage}
                                onClick={() => fetchNextPage()}
                                isDisabled={isLoading}
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
                    </Flex>
                </>
            )}
        </Flex>
    );
};

export default NavProject;
