import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock, FiUser } from "react-icons/fi";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { InputField } from "..";

const Signup = () => {
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
            rePassword: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
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
            <InputField
                id="rePassword"
                type="password"
                placeHolder="Repassword"
                register={register}
                icon={<FiLock />}
                password
                errors={errors}
                required
            />

            <Button
                width="60%"
                marginTop="10px"
                onClick={handleSubmit(onSubmit)}
                bgGradient="linear(to-l, teal.600, teal.400)"
                borderRadius="full"
            >
                Signup
            </Button>
        </VStack>
    );
};

export default Signup;
