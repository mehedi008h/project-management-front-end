import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { AddProjectButton, NavProject, ProfileAvatar, SearchInput } from "..";
import logo from "../../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
    return (
        <Flex
            height="80px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={6}
        >
            <Box
                display={{
                    base: "none",
                    xl: "block",
                    md: "block",
                    lg: "block",
                }}
                w="100%"
                paddingRight="15px"
            >
                <NavProject />
            </Box>
            <Box
                display={{ base: "block", xl: "none", md: "none", lg: "none" }}
                w="100%"
            >
                <Image src={logo} boxSize={10} />
            </Box>
            <HStack spacing={5} w="100%" justifyContent="end">
                <HStack
                    spacing={5}
                    display={{
                        base: "none",
                        xl: "flex",
                        md: "flex",
                        lg: "flex",
                    }}
                    w="100%"
                >
                    <Box
                        h={8}
                        w="1px"
                        backgroundColor="teal"
                        marginTop={2}
                        rounded="md"
                    ></Box>
                    <SearchInput />
                    <AddProjectButton />
                </HStack>
                <ProfileAvatar />
                <Box
                    display={{
                        base: "flex",
                        xl: "none",
                        md: "none",
                        lg: "none",
                    }}
                    justifyContent="center"
                    alignItems="center"
                    h={10}
                    w={10}
                    rounded="md"
                    border="1px"
                    borderColor="gray.500"
                >
                    <CgMenuRight size={25} />
                </Box>
            </HStack>
        </Flex>
    );
};

export default Navbar;
