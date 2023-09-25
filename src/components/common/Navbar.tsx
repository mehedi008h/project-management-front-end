import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import {
    AddProjectButton,
    MobileNavDrawer,
    NavProject,
    ProfileAvatar,
    SearchInput,
} from "..";
import logo from "../../assets/logo.png";
import { SearchType } from "../../enums/search.enum";
import useProjectLength from "../../hooks/useProjectLength";

const Navbar = () => {
    const { data: projects, isLoading } = useProjectLength();
    const projectLength =
        !isLoading && projects && projects?.length > 0 ? true : false;

    return (
        <Flex
            height="80px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={6}
            paddingX={4}
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
                {projectLength ? (
                    <NavProject />
                ) : (
                    <Box
                        display={{
                            base: "none",
                            xl: "block",
                            md: "block",
                            lg: "block",
                        }}
                        w="100%"
                    >
                        <Image src={logo} boxSize={10} />
                    </Box>
                )}
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
                    justifyContent="end"
                >
                    {projectLength && (
                        <>
                            <Box
                                h={8}
                                w="1px"
                                backgroundColor="teal"
                                marginTop={2}
                                rounded="md"
                            ></Box>
                            <SearchInput type={SearchType.PROJECT} />
                        </>
                    )}

                    <AddProjectButton />
                </HStack>
                <ProfileAvatar />
                <MobileNavDrawer />
            </HStack>
        </Flex>
    );
};

export default Navbar;
