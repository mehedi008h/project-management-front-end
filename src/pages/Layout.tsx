import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
const Layout = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area="aside">
                    <Sidebar />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingX={4}>
                    <Navbar />
                    <Outlet />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Layout;
