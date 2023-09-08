import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { CiViewList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import moment from "moment";

import placeHolder from "../../assets/no-image-placeholder.webp";
import { ProjectAvatarGroup, ProjectDetailsBtn } from "..";
import { Project } from "../../domain/project";
import { User } from "../../domain/user";

interface Props {
    project: Project | undefined;
    developers: User[] | undefined;
    totalTask: number | undefined;
    projectLeader?: boolean;
    loading: boolean;
}

const ProjectDetailsCard = ({
    project,
    developers,
    totalTask,
    projectLeader,
    loading,
}: Props) => {
    return (
        <Box my={5} bg="blackAlpha.500" p={4} borderRadius="md">
            <Flex justify="space-between" alignItems="center">
                <Text>Project Identifier # {project?.projectIdentifier}</Text>
                {projectLeader && <ProjectDetailsBtn />}
            </Flex>

            <Flex
                flexDirection={{
                    xl: "row",
                    lg: "row",
                    md: "row",
                    base: "column",
                }}
                gap={6}
                my={5}
                width="100%"
            >
                {/* image  */}
                <Box
                    width={{
                        xl: "450px",
                        lg: "450px",
                        md: "450px",
                        base: "100%",
                    }}
                    height="300px"
                    border="1px"
                    borderColor="gray.600"
                    borderRadius="md"
                >
                    <Image
                        src={
                            project?.photo.url ? project.photo.url : placeHolder
                        }
                        w="100%"
                        h="100%"
                        rounded="md"
                        objectFit="contain"
                    />
                </Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>{project?.title}</Text>
                    <Text mt={2} color="gray.300" fontSize="sm">
                        {project?.description}
                    </Text>
                    <Flex gap={4} my={4} flexWrap="wrap">
                        {project?.tags.map((tag, i) => (
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
                    </Flex>

                    <Flex gap={3}>
                        <Flex align="center" gap={1}>
                            <RiAttachment2 />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Attachment
                            </Text>
                            (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <IoChatboxEllipsesOutline color="white" />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Message
                            </Text>{" "}
                            (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <CiViewList />
                            <Text
                                display={{
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    base: "none",
                                }}
                            >
                                Task
                            </Text>{" "}
                            ({totalTask})
                        </Flex>
                    </Flex>

                    <Flex gap={4} my={4}>
                        <Badge px={2} py={1}>
                            <Flex alignItems="center" gap={2}>
                                <GiSandsOfTime size={15} />
                                <Text textTransform="uppercase">
                                    {moment(project?.startDate).format(
                                        "MMMM Do YY"
                                    )}
                                </Text>
                            </Flex>
                        </Badge>
                        <Badge px={2} py={1} colorScheme="green">
                            <Flex alignItems="center" gap={2}>
                                <MdOutlineTimer size={15} />
                                <Text textTransform="uppercase">
                                    {moment(project?.endDate).format(
                                        "MMMM Do YY"
                                    )}
                                </Text>
                            </Flex>
                        </Badge>
                    </Flex>
                    <Box my={5}>
                        <Text mb={3}>Assigned Developer</Text>
                        <ProjectAvatarGroup
                            developers={developers}
                            loading={loading}
                            size="sm"
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsCard;
