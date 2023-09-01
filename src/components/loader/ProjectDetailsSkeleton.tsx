import { Box, Flex, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ProjectAvatarGroup } from "..";

const ProjectDetailsSkeleton = () => {
    return (
        <Box my={5} bg="blackAlpha.500" p={4} borderRadius="md">
            <Flex justify="space-between" alignItems="center">
                <SkeletonText
                    noOfLines={1}
                    spacing="2"
                    skeletonHeight="2"
                    width="40%"
                />
                <HStack>
                    {[1, 2, 3, 4].map((item) => (
                        <SkeletonText
                            key={item}
                            noOfLines={1}
                            skeletonHeight="5"
                            w="60px"
                            rounded="full"
                        />
                    ))}
                </HStack>
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
                <Skeleton
                    width={{
                        xl: "450px",
                        lg: "450px",
                        md: "450px",
                        base: "100%",
                    }}
                    height="300px"
                ></Skeleton>
                {/* description  */}
                <Box width="100%">
                    <SkeletonText
                        noOfLines={1}
                        spacing="2"
                        skeletonHeight="2"
                        width="100%"
                    />
                    <SkeletonText
                        mt="4"
                        noOfLines={7}
                        spacing="2"
                        skeletonHeight="1"
                        width="100%"
                    />
                    <Flex gap={4} my={4} flexWrap="wrap" width="100%">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <SkeletonText
                                key={item}
                                noOfLines={1}
                                spacing="4"
                                skeletonHeight="5"
                                w="50px"
                                rounded="full"
                            />
                        ))}
                    </Flex>

                    <Flex gap={3}>
                        {[1, 2, 3].map((item) => (
                            <SkeletonText
                                key={item}
                                noOfLines={1}
                                spacing="4"
                                skeletonHeight="5"
                                w="60px"
                                rounded="full"
                            />
                        ))}
                    </Flex>

                    <Flex gap={4} my={4}>
                        {[1, 2].map((item) => (
                            <SkeletonText
                                key={item}
                                noOfLines={1}
                                spacing="4"
                                skeletonHeight="5"
                                w="70px"
                                rounded="full"
                            />
                        ))}
                    </Flex>
                    <Box my={5}>
                        <SkeletonText
                            noOfLines={1}
                            spacing="2"
                            skeletonHeight="2"
                            width="30%"
                            mb={3}
                        />
                        <ProjectAvatarGroup size="xs" loading={true} />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsSkeleton;
