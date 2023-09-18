import { VStack } from "@chakra-ui/react";
import { ProjectCard } from "..";
import { Project } from "../../domain/project";

interface Props {
    projects: Project[] | undefined;
}

const ProjectConatiner = ({ projects }: Props) => {
    return (
        <VStack spacing={3}>
            {projects &&
                projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
        </VStack>
    );
};

export default ProjectConatiner;
