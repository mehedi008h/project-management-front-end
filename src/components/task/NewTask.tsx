import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { InputField, SelectField, SelectTags, TextareaField } from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";
const NewTask = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
    };
    return (
        <VStack spacing={5}>
            <InputField
                id="name"
                type="text"
                label="Task Title"
                placeHolder="Task Title"
                register={register}
                icon={<LiaHeadingSolid />}
                errors={errors}
                required
            />
            <HStack w="100%">
                <InputField
                    id="startDate"
                    type="date"
                    label="Start Date"
                    placeHolder="Start Date"
                    register={register}
                    icon={<CiCalendarDate />}
                    errors={errors}
                    required
                />
                <InputField
                    id="endDate"
                    type="date"
                    label="End Date"
                    placeHolder="End Date"
                    register={register}
                    icon={<MdOutlineUpdate />}
                    errors={errors}
                    required
                />
            </HStack>
            <TextareaField
                id="description"
                label="Description"
                register={register}
                errors={errors}
                required
            />

            <SelectField
                id="developer"
                label="Developer"
                register={register}
                errors={errors}
                required
            >
                <option value="Mehedi">Mehedi</option>
                <option value="Mehedi">Rafiq</option>
                <option value="Mehedi">Masum</option>
            </SelectField>
            <SelectTags />
            <Button
                size="md"
                w="100%"
                fontFamily="monospace"
                fontSize={16}
                onClick={handleSubmit(onSubmit)}
                marginBottom={3}
            >
                Assign
            </Button>
        </VStack>
    );
};

export default NewTask;
