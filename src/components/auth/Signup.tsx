import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock, FiUser } from "react-icons/fi";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputField } from "..";
import { useMutation } from "@tanstack/react-query";
import { User } from "../../domain/user";
import { authApi } from "../../service/apiClient";

const Signup = () => {
    const {
        data: response,
        isLoading,
        mutate,
    } = useMutation<User, Error, User>({
        mutationFn: (register) => {
            return authApi.post("/auth/register", register);
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
        mutate(data as User);
    };
    console.log("Response: " + JSON.stringify(response));

    return (
        <VStack spacing={4}>
            <HStack>
                <InputField
                    id="firstName"
                    type="text"
                    placeHolder="First Name"
                    register={register}
                    icon={<FiUser />}
                    errors={errors}
                    required
                />
                <InputField
                    id="lastName"
                    type="text"
                    placeHolder="Last Name"
                    register={register}
                    icon={<FiUser />}
                    errors={errors}
                    required
                />
            </HStack>

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

            <Button
                onClick={handleSubmit(onSubmit)}
                width="60%"
                marginTop="10px"
                bgGradient="linear(to-l, teal.600, teal.400)"
                borderRadius="full"
                isLoading={isLoading}
                disabled={isLoading}
            >
                Signup
            </Button>
        </VStack>
    );
};

export default Signup;
