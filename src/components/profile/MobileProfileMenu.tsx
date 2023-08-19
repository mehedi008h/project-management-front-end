import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";

const MobileProfileMenu = () => {
    const routes = [
        {
            label: "Home",
            icon: GoHome,
            href: "/",
            color: "teal",
        },
        {
            label: "My Profile",
            icon: CgProfile,
            href: "/profile",
            color: "teal",
        },
        {
            label: "Portfolio",
            icon: AiOutlineProject,
            href: "/profile/portfolio",
            color: "violet",
        },

        {
            label: "Change Password",
            icon: RiLockPasswordLine,
            color: "skyblue",
            href: "/profile/change-password",
        },
    ];
    return (
        <Box
            display={{ base: "flex", lg: "none", md: "none", xl: "none" }}
            width="100%"
            gap={3}
            flexDirection="row"
            flexWrap="wrap"
            mb={3}
        >
            {routes.map((route) => (
                <Link key={route.href} to={route.href}>
                    <Flex
                        alignItems="center"
                        gap={3}
                        flexDirection="row"
                        fontWeight="medium"
                        cursor="pointer"
                        paddingX={3}
                        py={1}
                        color="gray.400"
                        border="2px solid gray"
                        rounded="full"
                        width="100%"
                        _hover={{
                            color: "white",
                            backgroundColor: "#121212",
                        }}
                        transition="all"
                    >
                        <route.icon color={route.color} size={22} />
                        {route.label}
                    </Flex>
                </Link>
            ))}
        </Box>
    );
};

export default MobileProfileMenu;
