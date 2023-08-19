import { Avatar, Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCalendarWeek } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { EditProfileBtn } from "..";

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
            label: "Portfolio",
            icon: BsCalendarWeek,
            color: "maroon",
            href: "/portfolio",
        },
    ];
    return (
        <VStack
            backgroundColor="black"
            p={3}
            rounded="md"
            justifyContent="center"
        >
            <Avatar name="M" size="2xl" />
            <Text mt={2} fontSize={20}>
                Mehedi Hasan
            </Text>
            <Text mt={-2} fontSize={14} color="gray.600">
                Software Engineer
            </Text>
            <EditProfileBtn />
            <Divider mt={3} />
            <Flex flexDirection="column" gap={1} w="100%">
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
                <Button marginTop={8}>Logout</Button>
            </Flex>
        </VStack>
    );
};

export default ProfileBar;
