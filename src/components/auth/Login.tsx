import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputField } from "..";

const Login = () => {
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
        console.log("Data: " + JSON.stringify(data));
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
                    borderRadius="full"
                >
                    Login
                </Button>
                <Text textAlign="right" fontSize={14}>
                    Forgot Password
                </Text>
            </HStack>
        </VStack>
    );
};

export default Login;
