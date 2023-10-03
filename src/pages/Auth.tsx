import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useGoogleLogin } from "@react-oauth/google";

import Container from "../components/common/Container";

import logo from "../assets/logo.png";
import screen from "../assets/Work in progress-pana.svg";
import { Forgot, Login, Signup } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGoogleAuth from "../hooks/useGoogleAuth";
import toast from "react-hot-toast";

const Auth = () => {
    const [login, setLogin] = useState(true);
    const [forgot, setForgot] = useState(false);

    const { mutate, isLoading: googleLoading } = useGoogleAuth();

    const googleLogin = useGoogleLogin({
        flow: "auth-code",
        onSuccess: async ({ code }) => {
            mutate(code as string);
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    });

    return (
        <Container>
            {/* Logo  */}
            <Link to="/">
                <Box marginBottom="25px" position="absolute" top={5} left={5}>
                    <Image src={logo} boxSize="30px" textAlign="center" />
                </Box>
            </Link>

            <Flex
                height="100%"
                flexDirection={login ? "row" : "row-reverse"}
                transition="all 0.13s ease-in-out"
            >
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    display={{
                        base: "none",
                        md: "flex",
                        lg: "flex",
                        xl: "flex",
                    }}
                    width="100%"
                    bg="teal.700"
                >
                    <Box h="400px" w="400px">
                        <Image src={screen} h="full" w="full" />
                    </Box>
                </Flex>
                <Flex
                    width="100%"
                    justifyItems="center"
                    alignItems={{
                        base: "end",
                        md: "center",
                        lg: "center",
                        xl: "center",
                    }}
                    paddingY={{ base: "10" }}
                    height="100vh"
                >
                    <Box
                        width={{
                            base: "90%",
                            md: "60%",
                            lg: "60%",
                            xl: "60%",
                        }}
                        marginX="auto"
                    >
                        <Box marginBottom="25px">
                            <Image
                                src={logo}
                                boxSize="70px"
                                marginX="auto"
                                textAlign="center"
                            />
                        </Box>
                        {forgot ? (
                            <Forgot setForgot={setForgot} />
                        ) : (
                            <>
                                {login ? (
                                    <Login setForgot={setForgot} />
                                ) : (
                                    <Signup />
                                )}
                                <HStack gap="15px" padding="8">
                                    <Divider />
                                    <Text>OR</Text>
                                    <Divider />
                                </HStack>

                                <Button
                                    onClick={() => googleLogin()}
                                    width="100%"
                                    variant="outline"
                                    leftIcon={<FcGoogle size={20} />}
                                    fontSize={16}
                                    fontWeight={500}
                                    fontFamily="monospace"
                                    isLoading={googleLoading}
                                >
                                    Login with Google
                                </Button>
                                <Button
                                    width="100%"
                                    marginTop="10px"
                                    variant="outline"
                                    leftIcon={<AiFillGithub size={20} />}
                                    fontSize={16}
                                    fontWeight={500}
                                    fontFamily="monospace"
                                >
                                    Login with Github
                                </Button>
                                <HStack
                                    alignItems="center"
                                    justifyContent="center"
                                    marginTop={5}
                                >
                                    <Text
                                        textAlign="center"
                                        fontSize={16}
                                        fontFamily="monospace"
                                    >
                                        {login
                                            ? `Don't have an account?`
                                            : `Already have an account!`}
                                    </Text>
                                    <Button
                                        variant="link"
                                        fontSize={16}
                                        fontWeight={500}
                                        fontFamily="monospace"
                                        onClick={() => setLogin(!login)}
                                    >
                                        {login ? `Signup` : `Login`}
                                    </Button>
                                </HStack>
                            </>
                        )}
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Auth;
