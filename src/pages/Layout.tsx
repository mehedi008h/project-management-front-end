import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Container, HomeLoading, Navbar, Sidebar } from "../components";
import useAuth from "../hooks/useAuth";
import { Auth } from ".";
const Layout = () => {
    const { data: user, isLoading } = useAuth();
    return (
        <Container>
            {isLoading ? (
                <HomeLoading />
            ) : (
                <>
                    {user ? (
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
                    ) : (
                        <Auth />
                    )}
                </>
            )}
        </Container>
    );
};

export default Layout;
