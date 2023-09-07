import { useState, useEffect } from "react";
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";
import moment from "moment";

import { InputField, SelectField, TextareaField } from "..";
import useProjectStore from "../../store/useProjectStore";
import useProject from "../../hooks/useProject";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";
import { Priority } from "../../enums/priority.enum";
import useTask from "../../hooks/useTask";
import useTaskUpdate from "../../hooks/useTaskUpdate";
import { Task } from "../../domain/task";

const UpdateTask = () => {
    // get project identifier from zustand store
    const project = useProjectStore();

    // fetch project & project developers
    const { data: projectDetails } = useProject(project.projectId);
    const { data: task } = useTask(project.taskId);
    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(project.projectId);

    const { mutate: updateTask, isLoading: taskUpdateLoading } = useTaskUpdate(
        project.projectId
    );

    const [tags, setTags] = useState<string[]>([]);

    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            _id: "",
            taskIdentifier: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
            developer: "",
            tags: "",
            priority: "",
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
        // check tag already exists
        if (tags.includes(text)) {
            setTags(tags.filter((tag) => tag !== text));
        } else {
            setTags([...tags, text]);
        }

        setCustomValue("tags", [...tags, text]);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
        updateTask(data as Task);
    };

    useEffect(() => {
        if (task) {
            reset({
                _id: task._id,
                taskIdentifier: task.taskIdentifier,
                title: task.title,
                startDate: task.startDate,
                endDate: task.endDate,
                description: task.description,
                developer: task.developer,
                tags: task.tags,
                priority: task.priority,
            });
        }
    }, [task, reset]);

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
                    value={moment(task?.startDate).format("Do MMM YYYY")}
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
                    value={moment(task?.endDate).format("Do MMM YYYY")}
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
            <HStack w="100%">
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
                <SelectField
                    id="priority"
                    label="Task Priority"
                    value={task?.priority}
                    register={register}
                    errors={errors}
                    required
                >
                    <option value="">Choose Priority</option>
                    {[Priority.LOW, Priority.MEDIUM, Priority.HIGH]?.map(
                        (priority) => (
                            <option value={priority}>{priority}</option>
                        )
                    )}
                </SelectField>
            </HStack>
            <Box textAlign="start" width={"100%"}>
                <Text mb="8px">Working Tech</Text>
                <HStack w="100%" flexWrap="wrap" spacing={3}>
                    {projectDetails?.tags.map((tag, i) => (
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
                isDisabled={taskUpdateLoading}
                isLoading={taskUpdateLoading}
                marginBottom={3}
            >
                Update Task
            </Button>
        </VStack>
    );
};

export default UpdateTask;
