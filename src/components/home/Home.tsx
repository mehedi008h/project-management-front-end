import {
    Box,
    Grid,
    GridItem,
    Show,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import { Navbar, NewUserHome, Sidebar } from "..";
import useProjectLength from "../../hooks/useProjectLength";
import useSidebar from "../../store/useSidebar";
import { isValidMotionProp, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Home = () => {
    const { data: projects, isLoading } = useProjectLength();

    const handleSidebar = useSidebar();

    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    const projectLength =
        !isLoading && projects && projects?.length > 0 ? true : false;
    return (
        <Box>
            {projectLength ? (
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
                <NewUserHome />
            )}
        </Box>
    );
};

export default Home;
