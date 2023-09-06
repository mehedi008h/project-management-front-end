import { useMemo, useState, useEffect } from "react";
import {
    Button,
    Flex,
    HStack,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    FormHeading,
    ImageUpload,
    InputField,
    Modal,
    SelectField,
    TextareaField,
} from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";
import useProjectStore from "../../store/useProjectStore";
import useProject from "../../hooks/useProject";
import { Status } from "../../enums/status.enum";
import useProjectUpdate from "../../hooks/useProjectUpdate";
import { Project } from "../../domain/project";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    TAG = 2,
    IMAGES = 3,
}

const UpdateProjectBtn = () => {
    // get project identifier from zustand
    const projectStore = useProjectStore();
    const { data: project } = useProject(projectStore.projectId!);

    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([...project?.tags]);
    const [text, setText] = useState("");
    // image state
    const [avatar, setAvatar] = useState(project?.photo.url);
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const handleTags = () => {
        setTags([...tags, text]);
        setCustomValue("tags", [...tags, text]);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.IMAGES) {
            return onNext();
        }
        console.log("Data: " + JSON.stringify(data));
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

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="How would you describe your project?"
                    subtitle="Short and sweet works best!"
                />
                <SelectField
                    id="status"
                    label="Project Status"
                    register={register}
                    errors={errors}
                    required
                >
                    <option value={project?.status}>{project?.status}</option>
                    {[Status.TODO, Status.PROGRESS, Status.COMPLETED].map(
                        (status) => (
                            <option value={status}>{status}</option>
                        )
                    )}
                </SelectField>
                <TextareaField
                    id="description"
                    label="Description"
                    register={register}
                    errors={errors}
                    required
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
                <HStack>
                    <Input
                        onChange={(e) => setText(e.target.value)}
                        borderColor={"teal.200"}
                        border="1px"
                        backgroundColor="transparent"
                        variant="filled"
                        _focus={{ borderColor: "teal" }}
                        _hover={{ borderColor: "teal" }}
                    />
                    <Button
                        onClick={handleTags}
                        fontFamily="monospace"
                        fontSize={18}
                    >
                        Add
                    </Button>
                </HStack>
                <HStack>
                    {tags.map((tag, i) => (
                        <Tag
                            size="md"
                            key={i}
                            borderRadius="full"
                            variant="solid"
                            colorScheme="green"
                        >
                            <TagLabel>{tag}</TagLabel>
                            <TagCloseButton
                                onClick={() =>
                                    setTags(tags.filter((item) => item !== tag))
                                }
                            />
                        </Tag>
                    ))}
                </HStack>
            </Flex>
        );
    }
    return (
        <>
            <Button onClick={onOpen} fontWeight="normal" fontSize={14}>
                Update Project
            </Button>
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
        </>
    );
};

export default UpdateProjectBtn;
