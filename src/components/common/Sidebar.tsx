import {
    Box,
    Flex,
    Image,
    Text,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuTimerReset } from "react-icons/lu";
import { BsCalendarWeek } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GoTasklist, GoProjectRoadmap } from "react-icons/go";
import {
    AiOutlineProject,
    AiOutlineFundProjectionScreen,
    AiOutlineSetting,
} from "react-icons/ai";
import logo from "../../assets/logo.png";
import { InviteBtn } from "..";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import useSidebar from "../../store/useSidebar";
import { motion, isValidMotionProp } from "framer-motion";

const Sidebar = () => {
    // handle sidebar toogle
    const handleSidebar = useSidebar();

    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    const routes = [
        {
            label: "Dashboard",
            icon: RxDashboard,
            href: "/",
            color: "teal",
        },
        {
            label: "Projects",
            icon: AiOutlineProject,
            href: "/projects",
            color: "violet",
        },
        {
            label: "My Task",
            icon: GoTasklist,
            color: "pink",
            href: "/tasks",
        },
        {
            label: "Inbox",
            icon: BiMessageRoundedDetail,
            color: "skyblue",
            href: "/inbox",
        },
        {
            label: "Portfolio",
            icon: GoProjectRoadmap,
            color: "maroon",
            href: "/portfolio",
        },
        {
            label: "Calendar",
            icon: BsCalendarWeek,
            color: "orange",
            href: "/calendar",
        },
        {
            label: "Time Management",
            icon: LuTimerReset,
            color: "yellow",
            href: "/time-management",
        },
        {
            label: "Reports",
            icon: AiOutlineFundProjectionScreen,
            color: "green",
            href: "/reports",
        },
        {
            label: "Settings",
            icon: AiOutlineSetting,
            href: "/settings",
        },
    ];
    return (
        <ChakraBox
            animate={{
                width: handleSidebar.toogle ? "250px" : "70px",

                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 10,
                },
            }}
            height="100vh"
            paddingY={4}
            borderRight="1px"
            borderColor="gray.700"
            position="fixed"
        >
            <Box position="absolute" right={2} top={1} transition="all">
                {handleSidebar.toogle ? (
                    <MdKeyboardDoubleArrowLeft
                        onClick={handleSidebar.onClose}
                        size={21}
                        color="gray"
                    />
                ) : (
                    <MdKeyboardDoubleArrowRight
                        onClick={handleSidebar.onOpen}
                        size={21}
                        color="gray"
                    />
                )}
            </Box>
            <Box paddingX={3} paddingY={2}>
                <Link to={"/"}>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            height={handleSidebar.toogle ? 12 : 8}
                            width={handleSidebar.toogle ? 12 : 8}
                            mt={handleSidebar.toogle ? 0 : 3}
                        >
                            <Image src={logo} />
                        </Box>
                        {handleSidebar.toogle && (
                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                marginTop={2}
                            >
                                Genius
                            </Text>
                        )}
                    </Flex>
                </Link>
                <Flex
                    flexDirection="column"
                    gap={1}
                    marginTop={handleSidebar.toogle ? 10 : 20}
                >
                    {routes.map((route) => (
                        <NavLink
                            key={route.href}
                            to={route.href}
                            style={({ isActive }) => {
                                return {
                                    background: isActive ? "black" : "",
                                    color: isActive ? "white" : "gray",
                                    borderRadius: "7px",
                                };
                            }}
                        >
                            <Flex
                                alignItems="center"
                                gap={3}
                                fontWeight="medium"
                                cursor="pointer"
                                padding={3}
                                rounded="md"
                                _hover={{
                                    color: "white",
                                    backgroundColor: "black",
                                }}
                                transition="all"
                            >
                                <route.icon size={22} />

                                {handleSidebar.toogle && route.label}
                            </Flex>
                        </NavLink>
                    ))}
                </Flex>
            </Box>
            <Box
                position="absolute"
                bottom={5}
                px={handleSidebar.toogle ? 5 : 2}
                w="100%"
            >
                <InviteBtn toogle={handleSidebar.toogle} />
            </Box>
        </ChakraBox>
    );
};

export default Sidebar;
