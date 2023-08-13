import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import { CiViewList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

import placeHolder from "../../assets/no-image-placeholder.webp";
import { ProjectDetailsBtn } from "..";

const ProjectDetailsCard = () => {
    return (
        <Box my={5} bg="blackAlpha.500" p={4} borderRadius="md">
            <Flex justify="space-between" alignItems="center">
                <Text>Project Identifier # 43534534</Text>
                <ProjectDetailsBtn />
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
                >
                    <Image
                        src={placeHolder}
                        w="100%"
                        h="100%"
                        rounded="md"
                        objectFit="cover"
                    />
                </Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>Project Name</Text>
                    <Text mt={2} color="gray.300" fontSize="sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque eius adipisci, quasi voluptate neque iure!
                    </Text>
                    <Flex gap={4} my={4} flexWrap="wrap">
                        <Badge px={2} py={1}>
                            Spring Boot
                        </Badge>
                        <Badge px={2} py={1}>
                            Spring Boot
                        </Badge>
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
                            (20)
                        </Flex>
                    </Flex>

                    <Flex gap={4} my={4}>
                        <Badge px={2} py={1}>
                            <Flex alignItems="center" gap={2}>
                                <GiSandsOfTime size={15} />
                                12-12-12
                            </Flex>
                        </Badge>
                        <Badge px={2} py={1} colorScheme="green">
                            <Flex alignItems="center" gap={2}>
                                <MdOutlineTimer size={15} />
                                <Text textTransform="uppercase">12-12-12</Text>
                            </Flex>
                        </Badge>
                    </Flex>
                    <Box my={5}>
                        <Text>Assigned Developer</Text>
                        <AvatarGroup size="sm" max={4} mt={2}>
                            <Avatar name="Mehedi" />
                        </AvatarGroup>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsCard;
