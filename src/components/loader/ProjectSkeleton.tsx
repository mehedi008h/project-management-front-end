import {
    Box,
    Flex,
    HStack,
    Skeleton,
    SkeletonText,
    VStack,
} from "@chakra-ui/react";
import { ProjectAvatarGroup } from "..";
interface Props {
    portfolio?: boolean;
}

const ProjectSkeleton = ({ portfolio = false }: Props) => {
    return (
        <VStack spacing={3}>
            {[1, 2].map((load) => (
                <Flex
                    key={load}
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
                        <Skeleton
                            h="100%"
                            w="100%"
                            objectFit="cover"
                            rounded="md"
                        />
                    </Box>
                    <VStack spacing={1.5} alignItems="start">
                        <SkeletonText
                            noOfLines={1}
                            spacing="2"
                            skeletonHeight="2"
                            width="100%"
                        />
                        <SkeletonText
                            mt="4"
                            noOfLines={4}
                            spacing="2"
                            skeletonHeight="1"
                            width="100%"
                        />
                        <HStack spacing={3} flexWrap="wrap" my={1}>
                            {[1, 2, 3, 4].map((item) => (
                                <Skeleton
                                    key={item}
                                    height="6px"
                                    rounded="full"
                                />
                            ))}
                        </HStack>
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            w="100%"
                        >
                            <HStack spacing={3}>
                                {[1, 2, 3].map((item) => (
                                    <SkeletonText
                                        key={item}
                                        noOfLines={1}
                                        spacing="4"
                                        skeletonHeight="4"
                                        w="30px"
                                        rounded="full"
                                    />
                                ))}
                            </HStack>
                            <ProjectAvatarGroup size="xs" loading />
                        </Flex>
                    </VStack>
                    <Skeleton
                        startColor="gray.300"
                        endColor="gray.900"
                        height="5px"
                        marginTop={3}
                    />
                </Flex>
            ))}
        </VStack>
    );
};

export default ProjectSkeleton;
