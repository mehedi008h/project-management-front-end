import {
    Badge,
    Box,
    Flex,
    HStack,
    Image,
    Progress,
    Text,
    VStack,
} from "@chakra-ui/react";
import { IoIosAttach } from "react-icons/io";
import { FilterItem, ProjectAvatarGroup } from "..";
import { BiMessageRoundedDots } from "react-icons/bi";
import image from "../../assets/no-image-placeholder.webp";
import { Link } from "react-router-dom";
import { Project } from "../../domain/project";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";

interface Props {
    portfolio?: boolean;
    project: Project;
}

const ProjectCard = ({ portfolio = false, project }: Props) => {
    const { data: developers, isLoading } = useProjectDeveloper(
        project.projectIdentifier!
    );
    return (
        <Flex
            border="1px"
            flexDirection={portfolio ? "row" : "column"}
            borderColor="gray.600"
            rounded="md"
            w="100%"
            padding={3}
            _hover={{ borderColor: "teal.900" }}
            transition="all 0.15s ease-in-out"
            gap={3}
        >
            <Box w={portfolio ? "300px" : "100%"} h="200px">
                <Image
                    h="100%"
                    w="100%"
                    objectFit="contain"
                    rounded="md"
                    src={project.photo.url ? project.photo.url : image}
                    alt={project.title}
                />
            </Box>
            <VStack spacing={1.5} alignItems="start">
                <Link to={`/projects/${project.projectIdentifier}`}>
                    {project.title}
                </Link>
                <Text fontSize={14} color="gray.600">
                    {project.description}
                </Text>
                <HStack spacing={3} flexWrap="wrap" my={1}>
                    {project.tags.map((tag, i) => (
                        <Badge
                            key={i}
                            variant="subtle"
                            colorScheme="gray"
                            fontWeight="medium"
                            px={3}
                            py={1}
                            rounded="full"
                        >
                            {tag}
                        </Badge>
                    ))}
                </HStack>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                >
                    <HStack spacing={3}>
                        <FilterItem icon={<IoIosAttach />} text="2" />
                        <FilterItem icon={<BiMessageRoundedDots />} text="5" />
                    </HStack>
                    <ProjectAvatarGroup
                        developers={developers}
                        loading={isLoading}
                        size="xs"
                    />
                </Flex>
            </VStack>
            <Progress color="red" value={64} size="xs" marginTop={3} />
        </Flex>
    );
};

export default ProjectCard;
