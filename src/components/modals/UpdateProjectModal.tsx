import { useMemo, useState, useEffect } from "react";
import { Range } from "react-date-range";
import { formatISO } from "date-fns";
import {
    Box,
    Flex,
    HStack,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    Calendar,
    FormHeading,
    ImageUpload,
    InputField,
    Modal,
    TextareaField,
} from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import useProjectStore from "../../store/useProjectStore";
import useProject from "../../hooks/useProject";
import { Status } from "../../enums/status.enum";
import useProjectUpdate from "../../hooks/useProjectUpdate";
import { Project } from "../../domain/project";
import useUpdateProjectStore from "../../store/useUpdateProjectStore";
import { AiFillTags } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

enum STEPS {
    INFO = 0,
    DATE = 1,
    TAG = 2,
    IMAGES = 3,
}

const UpdateProjectModal = () => {
    // get project identifier from zustand
    const projectStore = useProjectStore();
    const { data: project } = useProject(projectStore.projectId!);

    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([]);
    const [tagValue, setTagValue] = useState<string>("");
    const [projectStatus, setStatus] = useState("");
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });
    // image state
    const [avatar, setAvatar] = useState();
    // open & close modal
    const { isOpen, onClose } = useUpdateProjectStore();

    const { mutate, isLoading: updateProjectLoading } = useProjectUpdate(
        projectStore.projectId
    );

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            _id: "",
            projectIdentifier: "",
            title: "",
            description: "",
            photo: avatar,
            startDate: "",
            endDate: "",
            status: "",
            tags: tags,
        },
    });

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    // upload photo
    const uploadAvatar = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result as string);
                setCustomValue("photo", reader.result as string);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleTags = (e: any) => {
        if (e.key === "Enter" || (e.key === "," && tagValue)) {
            setTags([...tags, tagValue]);
            setCustomValue("tags", [...tags, tagValue]);
            setTagValue("");
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.IMAGES) {
            return onNext();
        }
        if (dateRange.startDate) {
            data.startDate = formatISO(dateRange.startDate);
        }

        if (dateRange.endDate) {
            data.endDate = formatISO(dateRange.endDate);
        }

        mutate(data as Project);
    };

    useEffect(() => {
        if (project) {
            reset({
                _id: project._id,
                projectIdentifier: project.projectIdentifier,
                title: project.title,
                startDate: project.startDate,
                endDate: project.endDate,
                description: project.description,
                status: project.status,
                tags: project.tags,
            });
        }
    }, [project, reset]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.IMAGES) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return undefined;
        }

        return "Back";
    }, [step]);

    let bodyContent = (
        <Flex flexDirection="column" gap={8}>
            <FormHeading
                title="Update some basics about your project"
                subtitle="What amenities do you have?"
            />
            <VStack spacing={5}>
                <InputField
                    id="title"
                    type="text"
                    label="Project Title"
                    placeHolder="Project Title"
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

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="Add a photo of your project"
                    subtitle="Show developer what your project looks like!"
                />
                <ImageUpload avatar={avatar} uploadAvatar={uploadAvatar} />
            </Flex>
        );
    }

    if (step === STEPS.DATE) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="How would you describe your project?"
                    subtitle="Short and sweet works best!"
                />

                <Calendar
                    onChange={(value) => setDateRange(value.selection)}
                    value={dateRange}
                />
            </Flex>
        );
    }
    if (step === STEPS.TAG) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="Which of these best describes your project?"
                    subtitle="Pick some categories"
                />
                {/* status  */}
                <Box>
                    <HStack alignItems="center" spacing={2}>
                        <BiLoader size={22} />
                        <Text>Project Status</Text>
                    </HStack>
                    <Text my={2} fontSize={14} color="gray.500">
                        Plase update project status
                    </Text>
                    <HStack my={3}>
                        {[Status.TODO, Status.PROGRESS, Status.COMPLETED].map(
                            (status) => (
                                <Flex
                                    px={5}
                                    py={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={3}
                                    rounded="full"
                                    border="1px"
                                    backgroundColor="transparent"
                                    color={
                                        status === projectStatus
                                            ? status === Status.COMPLETED
                                                ? "green"
                                                : status === Status.PROGRESS
                                                ? "yellow"
                                                : status === Status.TODO
                                                ? "red"
                                                : "gray.500"
                                            : "gray.500"
                                    }
                                    cursor="pointer"
                                    _hover={{
                                        color: "maroon",
                                    }}
                                    onClick={() => {
                                        setStatus(status);
                                        setCustomValue("status", status);
                                    }}
                                >
                                    <IoCheckmarkDoneCircleSharp size={23} />
                                    <Text>{status.toUpperCase()}</Text>
                                </Flex>
                            )
                        )}
                    </HStack>
                </Box>

                {/* tags  */}
                <Box>
                    <HStack alignItems="center" spacing={2}>
                        <AiFillTags size={22} />
                        <Text>Tags</Text>
                    </HStack>
                    <Text my={2} fontSize={14} color="gray.500">
                        Plase enter or add a comma after each tag
                    </Text>
                    <HStack
                        border="1px"
                        rounded="md"
                        borderColor="gray.600"
                        backgroundColor="transparent"
                        _focus={{ borderColor: "teal" }}
                        _hover={{ borderColor: "teal" }}
                        flexWrap="wrap"
                        p={2}
                    >
                        {tags.map((tag, i) => (
                            <Tag
                                size="md"
                                key={i}
                                borderRadius="md"
                                variant="solid"
                                colorScheme="gray"
                                width="fit-content"
                                px={2}
                                py={1}
                            >
                                <TagLabel>{tag.toUpperCase()}</TagLabel>
                                <Box
                                    ms={1}
                                    h={4}
                                    w="1px"
                                    backgroundColor="gray.400"
                                    rounded="md"
                                ></Box>
                                <TagCloseButton
                                    onClick={() =>
                                        setTags(
                                            tags.filter((item) => item !== tag)
                                        )
                                    }
                                />
                            </Tag>
                        ))}
                        <Input
                            onChange={(e) => setTagValue(e.target.value)}
                            onKeyDown={handleTags}
                            value={tagValue}
                            type="text"
                            background="transparent"
                            color="gray.600"
                            fontSize={15}
                            style={{
                                outline: "none",
                            }}
                            border="none"
                            w="min-content"
                            variant="unstyled"
                        />
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
            disabled={false}
            loading={updateProjectLoading}
            title="Update Project"
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.INFO ? undefined : onBack}
            body={bodyContent}
        />
    );
};

export default UpdateProjectModal;
