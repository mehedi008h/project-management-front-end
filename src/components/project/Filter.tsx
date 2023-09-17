import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    SkeletonCircle,
    SkeletonText,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react";
import useGetTags from "../../hooks/useGetTags";
import { FormHeading } from "..";
import { useState } from "react";
import { AiFillTags } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import useTeammates from "../../hooks/useTeammates";
import { IoIosArrowForward } from "react-icons/io";
import useProjectStore from "../../store/useProjectStore";
import { FcClearFilters } from "react-icons/fc";

const Filter = () => {
    // project store
    const projectQuery = useProjectStore((s) => s.projectQuery);
    const setSelectedTags = useProjectStore((s) => s.setTag);
    const setSelectedDeveloperIdentifiers = useProjectStore(
        (s) => s.setDeveloperIdentifier
    );
    const clearFilter = useProjectStore((s) => s.clearFilter);

    //tag & developer state
    const [item, setItem] = useState<string>();
    const [developer, setDedeloper] = useState<string>();

    // get tags & team members
    const { data: tags, isLoading: tagsLoading } = useGetTags();
    const { data: teams, isLoading: teamLoading } = useTeammates();

    // apply filter & store in project store
    const handleFilter = () => {
        item && setSelectedTags(item as string);
        developer && setSelectedDeveloperIdentifiers(developer as string);
    };

    // clear filter
    const handleClearFilter = () => {
        clearFilter();
        setDedeloper("");
        setItem("");
    };

    // show clear btn by condition
    const clearBtn = projectQuery.developerIdentifier || projectQuery.tag;

    // team members loader
    const teamLoder = [1, 2, 3, 4, 5, 6].map((load) => (
        <HStack
            key={load}
            px={4}
            py={2}
            rounded="full"
            cursor="pointer"
            _hover={{ shadow: "md" }}
            bg="gray.900"
            width="150px"
        >
            <Box>
                <SkeletonCircle size="8" />
            </Box>
            <Box width="100%">
                <SkeletonText
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="2"
                    width="100%"
                />
                <SkeletonText
                    mt={2}
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="1"
                    width="100%"
                />
            </Box>
        </HStack>
    ));

    return (
        <VStack spacing={5} alignItems="start">
            {/* filter by tags  */}
            <Box>
                <FormHeading
                    title="Filter Project by tags"
                    icon={<AiFillTags size={20} color="green" />}
                />
                <Flex flexWrap="wrap" gap={3} my={3}>
                    {tagsLoading ? (
                        <>
                            {[1, 2, 3, 4].map((load) => (
                                <SkeletonText
                                    key={load}
                                    noOfLines={1}
                                    spacing="4"
                                    skeletonHeight="5"
                                    w="50px"
                                    rounded="full"
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {tags?.map((tag) => (
                                <Tag
                                    key={tag}
                                    onClick={() => setItem(tag)}
                                    cursor="pointer"
                                    colorScheme={item === tag ? "red" : "gray"}
                                >
                                    {tag.toLocaleUpperCase()}
                                </Tag>
                            ))}
                        </>
                    )}
                </Flex>
            </Box>
            {/* filter by team mateds  */}
            <Box>
                <FormHeading
                    title="Filter Project by Team mate"
                    icon={<GrEmoji size={20} color="green" />}
                />
                <Flex flexWrap="wrap" gap={3} my={3}>
                    {teamLoading ? (
                        <>{teamLoder}</>
                    ) : (
                        <>
                            {teams?.map((team) => (
                                <HStack
                                    key={team._id}
                                    px={4}
                                    py={2}
                                    rounded="full"
                                    cursor="pointer"
                                    _hover={{ shadow: "md" }}
                                    border="1px"
                                    bg="gray.900"
                                    borderColor={
                                        developer === team._id
                                            ? "#0D85A2"
                                            : "gray.900"
                                    }
                                    onClick={() =>
                                        setDedeloper(
                                            developer?.includes(team._id)
                                                ? ""
                                                : team._id
                                        )
                                    }
                                >
                                    <Avatar name={team.firstName} size="sm" />
                                    <Box>
                                        <Text fontSize={14}>
                                            {team.firstName} {team.lastName}
                                        </Text>
                                        <Text fontSize={12} color="gray.400">
                                            @{team.username}
                                        </Text>
                                    </Box>
                                </HStack>
                            ))}
                        </>
                    )}
                </Flex>
            </Box>
            <HStack spacing={3} justifyContent="end" w="100%" mb={3}>
                {clearBtn && (
                    <Button
                        size="sm"
                        fontFamily="monospace"
                        px={4}
                        fontSize="sm"
                        bgGradient="linear(to-r, red.900, maroon)"
                        _hover={{
                            bgGradient: "linear(to-r, red.800, maroon)",
                        }}
                        rightIcon={<FcClearFilters size={16} />}
                        onClick={handleClearFilter}
                    >
                        Clear
                    </Button>
                )}

                <Button
                    size="sm"
                    fontFamily="monospace"
                    px={4}
                    fontSize="sm"
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                        bgGradient: "linear(to-r, teal.600, green.600)",
                    }}
                    rightIcon={
                        <IoIosArrowForward
                            size={16}
                            color="maroon"
                            className="next_btn"
                        />
                    }
                    onClick={handleFilter}
                >
                    Apply
                </Button>
            </HStack>
        </VStack>
    );
};

export default Filter;
