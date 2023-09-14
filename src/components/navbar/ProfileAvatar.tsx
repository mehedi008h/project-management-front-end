import {
    Avatar,
    Box,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    SkeletonCircle,
    Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import avatar from "../../assets/profile.png";

const ProfileAvatar = () => {
    const navigate = useNavigate();
    const { data: user, isLoading } = useAuth();
    const { mutate: logout, isSuccess, isLoading: logoutLoding } = useLogout();

    if (isSuccess) navigate("/");

    return (
        <>
            <Menu>
                <MenuButton>
                    {isLoading ? (
                        <SkeletonCircle size="11" />
                    ) : (
                        <Box
                            bgGradient="linear(to-r, teal.500, green.500)"
                            p={0.5}
                            rounded="full"
                        >
                            <Avatar
                                name={user?.firstName}
                                src={user?.photo ? user.photo.url : avatar}
                                size="md"
                                cursor="pointer"
                            />
                        </Box>
                    )}
                </MenuButton>
                {!isLoading && (
                    <MenuList px={5}>
                        <MenuGroup title="Profile">
                            <HStack px={2} my={2}>
                                <Avatar
                                    name={user?.firstName}
                                    src={user?.photo ? user.photo.url : avatar}
                                    size="md"
                                    cursor="pointer"
                                />
                                <Box>
                                    <Flex alignItems="center" gap={1}>
                                        <Text>
                                            {`${user?.firstName}  ${user?.lastName}`}
                                        </Text>
                                        <Text fontSize={12} color="gray.500">
                                            (@{user?.username})
                                        </Text>
                                    </Flex>
                                    <Text fontSize={12} color="gray.500">
                                        Software Engineer
                                    </Text>
                                </Box>
                            </HStack>
                            <Link to="/profile">
                                <MenuItem>My Account</MenuItem>
                            </Link>
                            <MenuItem onClick={() => logout()}>
                                {logoutLoding ? "Loading" : "Logout"}
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                )}
            </Menu>
        </>
    );
};

export default ProfileAvatar;
