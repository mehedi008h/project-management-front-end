import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock, FiUser } from "react-icons/fi";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputField } from "..";
import { User } from "../../domain/user";
import useRegister from "../../hooks/useRegister";

const Signup = () => {
    const { isLoading, mutate } = useRegister();

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
        mutate(data as User);
    };

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
