import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

const Sidebar = () => {
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
        <Box
            height="100vh"
            width="250px"
            paddingY={4}
            borderRight="1px"
            borderColor="gray.700"
            position="fixed"
        >
            <Box paddingX={3} paddingY={2}>
                <Link to={"/"}>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box height={12} width={12}>
                            <Image src={logo} />
                        </Box>
                        <Text fontSize="2xl" fontWeight="bold" marginTop={2}>
                            Genius
                        </Text>
                    </Flex>
                </Link>
                <Flex flexDirection="column" gap={1} marginTop={10}>
                    {routes.map((route) => (
                        <Link key={route.href} to={route.href}>
                            <Flex
                                alignItems="center"
                                gap={3}
                                flex={1}
                                fontWeight="medium"
                                cursor="pointer"
                                padding={3}
                                color="gray.400"
                                rounded="md"
                                _hover={{
                                    color: "white",
                                    backgroundColor: "black",
                                }}
                                transition="all"
                            >
                                <route.icon size={22} />
                                {route.label}
                            </Flex>
                        </Link>
                    ))}
                </Flex>
            </Box>
            <Box position="absolute" bottom={5} px={5} w="100%">
                <InviteBtn />
            </Box>
        </Box>
    );
};

export default Sidebar;
