import {
    Box,
    Grid,
    GridItem,
    Show,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { motion, isValidMotionProp } from "framer-motion";

import { Container, HomeLoading, Navbar, Sidebar } from "../components";
import useAuth from "../hooks/useAuth";
import { Auth } from ".";
import useSidebar from "../store/useSidebar";
const Layout = () => {
    const { data: user, isLoading } = useAuth();
    const handleSidebar = useSidebar();

    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    return (
        <Container>
            {isLoading ? (
                <HomeLoading />
            ) : (
                <>
                    {user ? (
                        <Grid
                            transition="all"
                            templateAreas={{
                                base: `"main"`,
                                lg: `"aside main"`,
                            }}
                            templateColumns={
                                handleSidebar.toogle
                                    ? {
                                          base: "1fr",
                                          lg: "250px 1fr",
                                      }
                                    : {
                                          base: "1fr",
                                          lg: "70px 1fr",
                                      }
                            }
                        >
                            <Show above="lg">
                                <GridItem area="aside">
                                    <Sidebar />
                                </GridItem>
                            </Show>
                            <GridItem area="main">
                                <ChakraBox
                                    animate={{
                                        width: "100%",

                                        transition: {
                                            duration: 0.5,
                                            damping: 10,
                                        },
                                    }}
                                >
                                    <Navbar />
                                    <Box paddingX={4}>
                                        <Outlet />
                                    </Box>
                                </ChakraBox>
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
