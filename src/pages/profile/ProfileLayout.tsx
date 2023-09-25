import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { MobileProfileMenu, Navbar, ProfileBar } from "../../components";

const ProfileLayout = () => {
    return (
        <Box width="100%" h="100vh" className="profile_bg">
            <Navbar />
            <Grid
                px={3}
                templateAreas={{
                    base: `"main"`,
                    lg: `"aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "250px 1fr",
                }}
                w={{ base: "100%", lg: "70%", md: "70%", xl: "70%" }}
                marginX="auto"
                backgroundColor="black"
                h="80vh"
                rounded="lg"
                shadow="dark-lg"
            >
                <Show above="lg">
                    <GridItem area="aside">
                        <ProfileBar />
                    </GridItem>
                </Show>
                <GridItem
                    area="main"
                    w="100%"
                    h="80vh"
                    overflowY="scroll"
                    className="hide-scroll-bar"
                    scrollBehavior="smooth"
                >
                    <MobileProfileMenu />
                    <Box w="100%">
                        <Outlet />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ProfileLayout;
