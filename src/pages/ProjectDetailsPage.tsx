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

const ProjectDetailsPage = () => {
    // get projectIdentifier from url
    const { projectIdentifier } = useParams();

    // fetch project, project tasks and project developers data
    const { data: project, isLoading } = useProject(projectIdentifier!);
    const { data: tasks, isLoading: taskLoading } = useProjectTasks(
        projectIdentifier!
    );
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
            >
                <TaskTableHeading projectLeader={projectLeader} />
                {taskLoading ? (
                    <Box w="100%" textAlign="center">
                        <Spinner color="red" mt={10} />
                    </Box>
                ) : (
                    <>
                        {tasks?.map((task) => (
                            <TableContent
                                key={task._id}
                                task={task}
                                projectLeader={projectLeader}
                            />
                        ))}
                    </>
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
                    <>
                        {tasks?.map((task) => (
                            <MobileTableContent key={task._id} task={task} />
                        ))}
                    </>
                )}
            </Box>
        </Container>
    );
};

export default ProjectDetailsPage;
