import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
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

const Filter = () => {
    const setSelectedTags = useProjectStore((s) => s.setTags);
    const sTags = useProjectStore((s) => s.projectQuery.tags);
    const setSelectedDeveloperIdentifiers = useProjectStore(
        (s) => s.setDeveloperIdentifiers
    );
    const sSeveloperIdentifiers = useProjectStore(
        (s) => s.projectQuery.developerIdentifiers
    );

    const [items, setItems] = useState<string[]>([]);
    const [developers, setDedelopers] = useState<string[]>([]);
    const { data: tags } = useGetTags();
    const { data: teams } = useTeammates();

    console.log("Tags se:", sTags);
    console.log("Developer se:", sSeveloperIdentifiers);

    // filter by project tags
    const handleTags = (text: string) => {
        // check tag already exists
        if (items.includes(text)) {
            setItems(items.filter((tag) => tag !== text));
        } else {
            setItems([...items, text]);
        }
    };

    // filter by project developer
    const handleDeveloper = (text: string) => {
        // check tag already exists
        if (developers.includes(text)) {
            setDedelopers(developers.filter((developer) => developer !== text));
        } else {
            setDedelopers([...developers, text]);
        }
    };

    // apply filter & store in project store
    const handleFilter = () => {
        setSelectedTags(items);
        setSelectedDeveloperIdentifiers(developers);
    };
    return (
        <VStack spacing={5} alignItems="start">
            <Box>
                <FormHeading
                    title="Filter Project by tags"
                    icon={<AiFillTags size={20} color="green" />}
                />
                <Flex flexWrap="wrap" gap={3} my={3}>
                    {tags?.map((tag) => (
                        <Tag
                            key={tag}
                            onClick={() => handleTags(tag)}
                            cursor="pointer"
                            colorScheme={
                                items.find((selectedTag) => selectedTag === tag)
                                    ? "red"
                                    : "gray"
                            }
                        >
                            {tag}{" "}
                        </Tag>
                    ))}
                </Flex>
            </Box>
            <Box>
                <FormHeading
                    title="Filter Project by Team mate"
                    icon={<GrEmoji size={20} color="green" />}
                />
                <Flex flexWrap="wrap" gap={3} my={3}>
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
                                developers.find(
                                    (selectedDeveloper) =>
                                        selectedDeveloper ===
                                        team.userIdentifier
                                )
                                    ? "#0D85A2"
                                    : "gray.900"
                            }
                            onClick={() => handleDeveloper(team.userIdentifier)}
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
                </Flex>
            </Box>
            <Box w="100%" alignItems="end" textAlign="end" mb={3}>
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
            </Box>
        </VStack>
    );
};

export default Filter;
