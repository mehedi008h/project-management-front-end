import { HStack, VStack } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { InputField } from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";
const NewTask = () => {
    const {
        register,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //     console.log("Data: " + JSON.stringify(data));
    // };
    return (
        <VStack spacing={5}>
            <InputField
                id="name"
                type="text"
                label="Project Name"
                placeHolder="Project Name"
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
        </VStack>
    );
};

export default NewTask;
