import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputField } from "..";
import { User } from "../../domain/user";
import useLogin from "../../hooks/useLogin";

interface Props {
    setForgot: (forgot: boolean) => void;
}

const Login = ({ setForgot }: Props) => {
    const { isLoading, mutate } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        mutate(data as User);
    };
    return (
        <VStack>
            <InputField
                id="email"
                type="email"
                placeHolder="Email"
                register={register}
                icon={<MdOutlineAlternateEmail />}
                errors={errors}
                required
            />

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

            <HStack width="100%" justifyContent="space-between">
                <Button
                    width="40%"
                    marginTop="10px"
                    onClick={handleSubmit(onSubmit)}
                    bgGradient="linear(to-l, teal.600, teal.400)"
                    _hover={{ bgGradient: "linear(to-l, teal.500, teal.600)" }}
                    borderRadius="full"
                    isLoading={isLoading}
                    disabled={isLoading}
                    transition="all 0.5ms ease-in-out "
                >
                    Login
                </Button>
                <Text
                    textAlign="right"
                    fontSize={14}
                    cursor="pointer"
                    _hover={{ color: "teal" }}
                    onClick={() => setForgot(true)}
                >
                    Forgot Password
                </Text>
            </HStack>
        </VStack>
    );
};

export default Login;
