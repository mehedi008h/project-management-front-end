import { Avatar, Box, Flex, HStack } from "@chakra-ui/react";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { NavProject, SearchInput } from "..";

const Navbar = () => {
    return (
        <Flex
            height="80px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            paddingRight={5}
        >
            <Box w="100%" paddingRight="15px">
                <NavProject />
            </Box>
            <HStack spacing={5} w="100%">
                <Box
                    h={8}
                    w="1px"
                    backgroundColor="teal"
                    marginTop={2}
                    rounded="md"
                ></Box>
                <SearchInput />
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    h={8}
                    w={12}
                    rounded="md"
                    backgroundColor="maroon"
                    cursor="pointer"
                >
                    <HiOutlineFolderAdd size={20} />
                </Flex>
                <Avatar name="Mehedi Hasan" size="md" />
            </HStack>
        </Flex>
    );
};

export default Navbar;
