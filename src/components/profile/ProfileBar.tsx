import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    Text,
    VStack,
} from "@chakra-ui/react";
import { AiOutlineProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { RiLockPasswordLine, RiVipDiamondFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { EditProfileBtn, Invitation } from "..";
import { PiMicrosoftTeamsLogoDuotone } from "react-icons/pi";
import useAuth from "../../hooks/useAuth";

const ProfileBar = () => {
    const { data: user } = useAuth();
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
            rounded="md"
            justifyContent="center"
        >
            <Box position="relative">
                <Avatar
                    name={user?.firstName}
                    src={user?.photo.url}
                    size="2xl"
                />
                <Flex
                    gap={2}
                    alignItems="center"
                    bg="transparent"
                    border="2px solid gray"
                    px={3}
                    py={1}
                    rounded="full"
                    position="absolute"
                    top={0}
                    right={-8}
                    color="silver"
                >
                    <RiVipDiamondFill /> {user?.diamond}
                </Flex>
            </Box>
            <Text mt={2} fontSize={20}>
                {`${user?.firstName}  ${user?.lastName}`}
            </Text>
            <Text mt={-2} fontSize={14} color="gray.600">
                {user?.work}
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
                <Invitation />
                <Button marginTop={8}>Logout</Button>
            </Flex>
        </VStack>
    );
};

export default ProfileBar;
