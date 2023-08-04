import { Button, Flex, HStack } from "@chakra-ui/react";
import {
    AiOutlineFilter,
    AiOutlineMenu,
    AiOutlineProject,
    AiOutlineSortAscending,
} from "react-icons/ai";
import { FilterItem } from "..";
import { MdOutlineTask } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

const FilterMenu = () => {
    return (
        <>
            <Flex
                border="1px"
                rounded="md"
                paddingX={4}
                paddingY={2}
                borderColor="gray.600"
                justifyContent="space-between"
                display={{ base: "none", xl: "flex", lg: "flex", md: "flex" }}
            >
                <HStack spacing={5}>
                    <FilterItem
                        icon={<AiOutlineProject />}
                        text="Project (12)"
                        fontSize={16}
                    />
                    <FilterItem
                        icon={<MdOutlineTask />}
                        text="Task (12)"
                        fontSize={16}
                    />
                </HStack>
                <HStack spacing={5}>
                    <FilterItem icon={<CgMenuGridO />} />
                    <FilterItem icon={<AiOutlineMenu />} />
                    <FilterItem
                        icon={<AiOutlineSortAscending />}
                        text="Sort"
                        fontSize={14}
                    />
                    <FilterItem
                        icon={<AiOutlineFilter />}
                        text="Filter"
                        fontSize={14}
                    />
                </HStack>
            </Flex>
            <Button
                display={{ base: "flex", xl: "none", lg: "none", md: "none" }}
                width="100%"
                variant="outline"
                fontFamily="monospace"
            >
                Filter
            </Button>
        </>
    );
};

export default FilterMenu;
