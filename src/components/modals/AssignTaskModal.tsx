import { useMemo, useState } from "react";
import {
    Avatar,
    Badge,
    Box,
    Flex,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LiaHeadingSolid } from "react-icons/lia";
import { Range } from "react-date-range";
import { formatISO } from "date-fns";

import { Calendar, FormHeading, InputField, Modal, TextareaField } from "..";
import useProjectStore from "../../store/useProjectStore";
import useProject from "../../hooks/useProject";
import useProjectDeveloper from "../../hooks/useProjectDeveloper";
import useAssignTask from "../../hooks/useAssignTask";
import { Task } from "../../domain/task";

enum STEPS {
    INFO = 0,
    DATE = 1,
    DEVELOPER = 2,
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AssignTaskModal = ({ isOpen, onClose }: Props) => {
    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([]);
    const [taskDeveloper, setTaskDeveloper] = useState<string>("");
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });
    // get project identifier from zustand store
    const project = useProjectStore();

    const { mutate, isLoading: createtaskLoading } = useAssignTask(
        project.projectId!
    );

    // fetch project & project developers
    const { data: projectDetails } = useProject(project.projectId!);
    const { data: developers, isLoading: developerLoading } =
        useProjectDeveloper(project.projectId!);

    const {
        register,
        setValue,
        reset,
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

    // set tags
    const handleTags = (text: string) => {
        // check tag already exists
        if (tags.includes(text)) {
            setTags(tags.filter((tag) => tag !== text));
        } else {
            setTags([...tags, text]);
        }

        setCustomValue("tags", [...tags, text]);
    };

    // set developer
    const handleDeveloper = (id: string) => {
        setTaskDeveloper(id);
        setCustomValue("developer", id);
    };

    // submit task
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.DEVELOPER) {
            return onNext();
        }

        if (dateRange.startDate) {
            data.startDate = formatISO(dateRange.startDate);
        }

        if (dateRange.endDate) {
            data.endDate = formatISO(dateRange.endDate);
        }
        mutate(data as Task);
        reset();
    };

    // modal buttons & actions
    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const actionLabel = useMemo(() => {
        if (step === STEPS.DEVELOPER) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return undefined;
        }

        return "Back";
    }, [step]);

    const disable = developerLoading || createtaskLoading;

    let bodyContent = (
        <Flex flexDirection="column" gap={8}>
            <FormHeading
                title="Share some basics about your project"
                subtitle="What amenities do you have?"
            />
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
                <TextareaField
                    id="description"
                    label="Description"
                    register={register}
                    errors={errors}
                    required
                />
            </VStack>
        </Flex>
    );

    if (step === STEPS.DATE) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="How many time giver for this task?"
                    subtitle="Short and sweet works best!"
                />
                <Calendar
                    onChange={(value) => setDateRange(value.selection)}
                    value={dateRange}
                    minDate={new Date(projectDetails?.startDate as string)}
                    maxDate={new Date(projectDetails?.endDate as string)}
                />
            </Flex>
        );
    }
    if (step === STEPS.DEVELOPER) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="Who & what stack will be satisfied?"
                    subtitle="Pick some good"
                />
                <Box textAlign="start" width={"100%"}>
                    <Text mb="8px">Choose Developer</Text>
                    <HStack w="100%" flexWrap="wrap" spacing={3} mt={2}>
                        {developers?.map((developer) => (
                            <Box
                                key={developer._id}
                                rounded="full"
                                p={1}
                                className={`${
                                    developer._id == taskDeveloper &&
                                    "avatar_border"
                                }`}
                            >
                                <Avatar
                                    onClick={() =>
                                        handleDeveloper(developer._id)
                                    }
                                    name={developer.firstName}
                                    cursor="pointer"
                                />
                            </Box>
                        ))}
                    </HStack>
                </Box>

                <Box textAlign="start" width={"100%"}>
                    <Text mb="8px">Working Tech</Text>
                    <HStack w="100%" flexWrap="wrap" spacing={3}>
                        {projectDetails?.tags.map((tag, i) => (
                            <Badge
                                onClick={() => handleTags(tag)}
                                colorScheme={
                                    tags.find(
                                        (selectedTag) => selectedTag === tag
                                    )
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
            </Flex>
        );
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            disabled={disable}
            loading={createtaskLoading}
            title="Create Project"
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.INFO ? undefined : onBack}
            body={bodyContent}
        />
    );
};

export default AssignTaskModal;
