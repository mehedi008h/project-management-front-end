import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
import {
    Container,
    MobileTableContent,
    ProjectDetailsCard,
    ProjectDetailsSkeleton,
    TableContent,
    TaskTableHeading,
} from "../components";
import { useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import useProjectTasks from "../hooks/useProjectTasks";
import useProjectDeveloper from "../hooks/useProjectDeveloper";
import useProjectStore from "../store/useProjectStore";
import useAuth from "../hooks/useAuth";
import InfiniteScroll from "react-infinite-scroll-component";

const ProjectDetailsPage = () => {
    // get projectIdentifier from url
    const { projectIdentifier } = useParams();

    // fetch project, project tasks and project developers data
    const { data: project, isLoading } = useProject(projectIdentifier!);
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading: taskLoading,
    } = useProjectTasks(projectIdentifier!);

    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.length, 0) || 0;

    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(projectIdentifier!);
    const { data: user } = useAuth();

    // store project identifier in zustand
    const projectId = useProjectStore();
    if (projectIdentifier) projectId.projectId = projectIdentifier;

    // check project leader
    const projectLeader: boolean =
        user && project?.projectLeader == user._id ? true : false;

    return (
        <Container>
            {isLoading ? (
                <ProjectDetailsSkeleton />
            ) : (
                <ProjectDetailsCard
                    project={project}
                    developers={developers}
                    totalTask={5}
                    projectLeader={projectLeader}
                    loading={developerLoading}
                />
            )}
            <Box
                display={{
                    base: "none",
                    xl: "block",
                    lg: "block",
                    md: "block",
                }}
                mb={3}
            >
                <TaskTableHeading projectLeader={projectLeader} />
                {taskLoading ? (
                    <Box w="100%" textAlign="center">
                        <Spinner color="red" mt={10} />
                    </Box>
                ) : (
                    <InfiniteScroll
                        dataLength={fetchedGamesCount}
                        hasMore={!!hasNextPage}
                        next={() => fetchNextPage()}
                        loader={
                            <Box w="100%" textAlign="center">
                                <Spinner color="red" mt={10} />
                            </Box>
                        }
                    >
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page?.map((task) => (
                                    <TableContent
                                        key={task._id}
                                        task={task}
                                        projectLeader={projectLeader}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </InfiniteScroll>
                )}
            </Box>
            {/* responsive */}
            <Box
                display={{ base: "block", xl: "none", lg: "none", md: "none" }}
                paddingBottom={3}
            >
                {taskLoading ? (
                    <Box w="100%" textAlign="center">
                        <Spinner color="red" mt={10} />
                    </Box>
                ) : (
                    <InfiniteScroll
                        dataLength={fetchedGamesCount}
                        hasMore={!!hasNextPage}
                        next={() => fetchNextPage()}
                        loader={
                            <Box w="100%" textAlign="center">
                                <Spinner color="red" mt={10} />
                            </Box>
                        }
                    >
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page?.map((task) => (
                                    <MobileTableContent
                                        key={task._id}
                                        task={task}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </InfiniteScroll>
                )}
            </Box>
        </Container>
    );
};

export default ProjectDetailsPage;
