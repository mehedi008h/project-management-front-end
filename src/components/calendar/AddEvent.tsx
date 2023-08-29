import { Button, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "..";
import { MdTitle } from "react-icons/md";

const AddEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
    };
    return (
        <VStack>
            <InputField
                id="title"
                type="title"
                placeHolder="Event Title ..."
                register={register}
                icon={<MdTitle />}
                errors={errors}
                required
            />
            <Button
                w="100%"
                marginTop="10px"
                marginBottom={2}
                onClick={handleSubmit(onSubmit)}
                fontWeight="normal"
            >
                Create
            </Button>
        </VStack>
    );
};

export default AddEvent;
