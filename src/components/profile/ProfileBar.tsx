import { Button, Flex, VStack } from "@chakra-ui/react";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { EditProfileBtn, Invitation } from "..";
import { PiMicrosoftTeamsLogoDuotone } from "react-icons/pi";

const ProfileBar = () => {
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
        {
            label: "Teams",
            icon: PiMicrosoftTeamsLogoDuotone,
            color: "skyblue",
            href: "/profile/teams",
        },
    ];
    return (
        <VStack
            backgroundColor="black"
            px={3}
            pt={8}
            pb={3}
            mb={3}
            borderRight="1px"
            borderColor="gray.700"
            h="80vh"
            position="fixed"
        >
            <Flex flexDirection="column" gap={3} w="100%">
                {routes.map((route) => (
                    <NavLink
                        key={route.href}
                        to={route.href}
                        style={({ isActive }) => {
                            return {
                                background: isActive ? "#121212" : "",
                                color: isActive ? "white" : "gray",
                                borderRadius: "5px",
                            };
                        }}
                    >
                        <Flex
                            alignItems="center"
                            gap={3}
                            flex={1}
                            fontWeight="medium"
                            cursor="pointer"
                            padding={2}
                            color="gray.400"
                            rounded="md"
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
                    </NavLink>
                ))}
                <EditProfileBtn />
                <Invitation />
                <Button
                    fontFamily="monospace"
                    fontSize={18}
                    position="absolute"
                    bottom={3}
                    width="90%"
                >
                    Logout
                </Button>
            </Flex>
        </VStack>
    );
};

export default ProfileBar;
