import { useState } from "react";
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";

import { InputField, SelectField, TextareaField } from "..";
import useProjectStore from "../../store/useProjectStore";
import useProject from "../../hooks/useProject";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";
import useAssignTask from "../../hooks/useAssignTask";
import { Task } from "../../domain/task";

const NewTask = () => {
    const [tags, setTags] = useState<string[]>([]);
    // get project identifier from zustand store
    const project = useProjectStore();

    const {
        mutate,

        isLoading: createtaskLoading,
    } = useAssignTask(project.projectId);

    // fetch project & project developers
    const { data, isLoading } = useProject(project.projectId!);
    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(project.projectId!);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            startDate: "",
            endDate: "",
            description: "",
            developer: "",
            tags: "",
        },
    });

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const handleTags = (text: string) => {
        setTags([...tags, text]);
        setCustomValue("tags", [...tags, text]);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
        mutate(data as Task);
    };

    return (
        <VStack spacing={5}>
            <InputField
                id="title"
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
                <option value="">Choose Developer</option>
                {developers?.map((developer) => (
                    <option value={developer._id}>
                        {developer.firstName} {developer.lastName}
                    </option>
                ))}
            </SelectField>
            <Box textAlign="start" width={"100%"}>
                <Text mb="8px">Working Tech</Text>
                <HStack w="100%" flexWrap="wrap" spacing={3}>
                    {data?.tags.map((tag, i) => (
                        <Badge
                            onClick={() => handleTags(tag)}
                            colorScheme={
                                tags.find((selectedTag) => selectedTag === tag)
                                    ? "teal"
                                    : "gray"
                            }
                            variant="solid"
                            color="gray.200"
                            px={2}
                            py={1}
                            rounded="full"
                            cursor="pointer"
                            key={i}
                        >
                            {tag}
                        </Badge>
                    ))}
                </HStack>
            </Box>
            <Button
                size="md"
                w="100%"
                fontFamily="monospace"
                fontSize={16}
                onClick={handleSubmit(onSubmit)}
                isLoading={createtaskLoading}
                disabled={createtaskLoading}
                marginBottom={3}
            >
                Assign
            </Button>
        </VStack>
    );
};

export default NewTask;
