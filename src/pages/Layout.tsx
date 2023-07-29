import { Box, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
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
                <GridItem area="aside" paddingX={5}>
                    <Sidebar />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <Text>Navbar</Text>
                    <Outlet />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Layout;
