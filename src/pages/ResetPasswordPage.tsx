import { Box, Button, Flex, Image, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

import bg from "../assets/registration-bg.svg";
import logo from "../assets/logo.png";
import { InputField } from "../components";
import { FiLock } from "react-icons/fi";
import useResetPassword from "../hooks/useResetPassword";
import { User } from "../domain/user";

const ResetPasswordPage = () => {
    const { token } = useParams();
    const { mutate, isLoading } = useResetPassword(token!);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        mutate(data as User);
    };
    return (
        <Flex
            bgImg={bg}
            w="100%"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            {/* Logo  */}
            <Link to="/">
                <Box marginBottom="25px" position="absolute" top={5} left={5}>
                    <Image src={logo} boxSize="30px" textAlign="center" />
                </Box>
            </Link>
            <Box bg="blackAlpha.700" p={7} rounded="md" w="450px">
                <Box marginBottom="25px" w="100%">
                    <Image
                        src={logo}
                        boxSize="40px"
                        textAlign="center"
                        mx="auto"
                    />
                </Box>
                <VStack spacing={4}>
                    <InputField
                        id="password"
                        type="password"
                        placeHolder="Password"
                        register={register}
                        icon={<FiLock />}
                        password
                        errors={errors}
                        required
                    />
                    <InputField
                        id="confirmPassword"
                        type="password"
                        placeHolder="Confirm Password"
                        register={register}
                        icon={<FiLock />}
                        password
                        errors={errors}
                        required
                    />

                    <Button
                        width="40%"
                        marginTop="10px"
                        onClick={handleSubmit(onSubmit)}
                        bgGradient="linear(to-l, teal.600, teal.400)"
                        _hover={{
                            bgGradient: "linear(to-l, teal.500, teal.600)",
                        }}
                        fontFamily="monospace"
                        borderRadius="full"
                        isLoading={isLoading}
                        disabled={isLoading}
                        transition="all 0.5ms ease-in-out "
                    >
                        Reset
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default ResetPasswordPage;
