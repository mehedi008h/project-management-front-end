import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar, ProfileBar } from "../../components";

const ProfileLayout = () => {
    return (
        <Box px={3} width="100%">
            <Navbar />

            <Grid
                templateAreas={{
                    base: ` 
                    "main"`,
                    lg: `
                    "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "300px 1fr",
                }}
                px={5}
                w={{ base: "100%", lg: "70%", md: "70%", xl: "70%" }}
                marginX="auto"
            >
                <Show above="lg">
                    <GridItem area="aside">
                        <ProfileBar />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingX={4}>
                        <Outlet />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ProfileLayout;
