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

const ProjectCard = () => {
    return (
        <Box
            border="1px"
            borderColor="gray.600"
            rounded="md"
            w="100%"
            padding={3}
            _hover={{ borderColor: "teal.900" }}
            transition="all 0.15s ease-in-out"
        >
            <Box w="100%" h="200px" marginBottom={3}>
                <Image
                    h="100%"
                    w="100%"
                    objectFit="cover"
                    rounded="md"
                    src={image}
                    alt="Dan Abramov"
                />
            </Box>
            <VStack spacing={1.5} alignItems="start">
                <Link to={`/projects/2`}>Project Management</Link>
                <Text fontSize={14} color="gray.600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, dolore!
                </Text>
                <HStack spacing={3} flexWrap="wrap">
                    <Badge
                        variant="subtle"
                        colorScheme="green"
                        fontWeight="medium"
                        p={1}
                    >
                        IOS
                    </Badge>
                    <Badge
                        variant="subtle"
                        colorScheme="green"
                        fontWeight="medium"
                        p={1}
                    >
                        React Native
                    </Badge>
                    <Badge
                        variant="subtle"
                        colorScheme="green"
                        fontWeight="medium"
                        p={1}
                    >
                        Spring Boot
                    </Badge>
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
                    <ProjectAvatarGroup size="xs" />
                </Flex>
            </VStack>
            <Progress color="red" value={64} size="xs" marginTop={3} />
        </Box>
    );
};

export default ProjectCard;
