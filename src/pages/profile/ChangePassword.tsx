import { Box, Button, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormHeading, InputField } from "../../components";
import { FiLock } from "react-icons/fi";

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            oldPassword: "",
            password: "",
            rePassword: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
    };
    return (
        <Box p={5} bg="black" rounded="md">
            <VStack spacing={5} justifyContent="start" alignItems="start">
                <FormHeading
                    title="Change Old Password"
                    subtitle="Try new one?"
                />
                <InputField
                    id="oldPassword"
                    type="password"
                    placeHolder="Old Password ..."
                    label="Old Password"
                    register={register}
                    icon={<FiLock />}
                    password
                    errors={errors}
                    required
                />
                <InputField
                    id="password"
                    type="password"
                    placeHolder="New Password..."
                    label="New Password"
                    register={register}
                    icon={<FiLock />}
                    password
                    errors={errors}
                    required
                />
                <InputField
                    id="rePassword"
                    type="password"
                    placeHolder="Retype New Password ..."
                    label="Retype New Password"
                    register={register}
                    icon={<FiLock />}
                    password
                    errors={errors}
                    required
                />
                <Button
                    width="60%"
                    marginTop="10px"
                    mx="auto"
                    onClick={handleSubmit(onSubmit)}
                    bgGradient="linear(to-l, teal.600, teal.400)"
                    borderRadius="full"
                >
                    Change Password
                </Button>
            </VStack>
        </Box>
    );
};

export default ChangePassword;
