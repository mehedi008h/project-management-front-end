import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormHeading, InputField } from "../../components";
import { FiLock } from "react-icons/fi";
import useChangePassword from "../../hooks/useChangePassword";
import { User } from "../../domain/user";

const ChangePassword = () => {
    const { mutate, isLoading } = useChangePassword();
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
        mutate(data as User);
    };
    return (
        <Box p={5} bg="black" rounded="md" h="70vh">
            <FormHeading
                title="Change Old Password"
                textSize="2xl"
                subtitle="Try new one?"
            />
            <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
                <VStack spacing={7} w="60%" mx="auto">
                    <InputField
                        rounded="full"
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
                        rounded="full"
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
                        rounded="full"
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
                        isDisabled={isLoading}
                        isLoading={isLoading}
                        borderRadius="full"
                        fontWeight={500}
                    >
                        Change Password
                    </Button>
                </VStack>
            </Flex>
        </Box>
    );
};

export default ChangePassword;
