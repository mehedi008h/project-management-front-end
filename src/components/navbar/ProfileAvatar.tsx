import {
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    Menu,
    MenuButton,
    MenuGroup,
    MenuList,
    SkeletonCircle,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import avatar from "../../assets/profile.png";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

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
                        <Avatar
                            name={user?.firstName}
                            src={user?.photo ? user.photo.url : avatar}
                            size="md"
                            cursor="pointer"
                        />
                    )}
                </MenuButton>
                {!isLoading && (
                    <MenuList backgroundColor="gray.800">
                        <MenuGroup title="Profile" fontFamily="monospace">
                            <Grid
                                templateColumns={"70px 1fr"}
                                alignItems="center"
                                px={5}
                                my={2}
                            >
                                <GridItem>
                                    <Avatar
                                        name={user?.firstName}
                                        src={
                                            user?.photo
                                                ? user.photo.url
                                                : avatar
                                        }
                                        size="md"
                                        cursor="pointer"
                                    />
                                </GridItem>
                                <GridItem>
                                    <Box>
                                        <Flex alignItems="center" gap={1}>
                                            <Text>
                                                {`${user?.firstName}  ${user?.lastName}`}
                                            </Text>
                                            <Text
                                                fontSize={12}
                                                color="gray.500"
                                            >
                                                (@{user?.username})
                                            </Text>
                                        </Flex>
                                        <Text fontSize={12} color="gray.500">
                                            Software Engineer
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                            <Grid
                                templateColumns={"70px 1fr"}
                                alignItems="center"
                                px={5}
                                mt={3}
                                py={3}
                                color="gray.500"
                                transition="all"
                                _hover={{
                                    color: "white",
                                    backgroundColor: "black",
                                }}
                            >
                                <GridItem ps={3}>
                                    <CiSettings size={25} />
                                </GridItem>
                                <GridItem>
                                    <Link to="/profile">
                                        <Text fontSize={14}>
                                            Manage Account
                                        </Text>
                                    </Link>
                                </GridItem>
                            </Grid>
                            <Grid
                                onClick={() => logout()}
                                templateColumns={"70px 1fr"}
                                alignItems="center"
                                px={5}
                                py={3}
                                mb={2}
                                color="gray.500"
                                cursor="pointer"
                                transition="all"
                                _hover={{
                                    color: "white",
                                    backgroundColor: "black",
                                }}
                            >
                                <GridItem ps={3}>
                                    {logoutLoding ? (
                                        <Spinner size="sm" color="red.500" />
                                    ) : (
                                        <IoLogOutOutline size={25} />
                                    )}
                                </GridItem>
                                <GridItem>
                                    <Text fontSize={14}>Sign out</Text>
                                </GridItem>
                            </Grid>
                        </MenuGroup>
                    </MenuList>
                )}
            </Menu>
        </>
    );
};

export default ProfileAvatar;
