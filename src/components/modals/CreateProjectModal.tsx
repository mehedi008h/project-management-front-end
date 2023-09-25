import { useMemo, useState } from "react";
import { Range } from "react-date-range";
import { formatISO } from "date-fns";
import {
    Button,
    Flex,
    HStack,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
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
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";
import useCreateProject from "../../hooks/useCreateProject";
import { Project } from "../../domain/project";
import useProjectStore from "../../store/useProjectStore";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    TAG = 2,
    IMAGES = 3,
}

const CreateProjectModal = () => {
    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([]);
    const [text, setText] = useState("");
    // image state
    const [avatar, setAvatar] = useState("");
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });
    // open & close modal
    const { isOpen, onClose } = useProjectStore();
    const { mutate, isLoading } = useCreateProject();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            description: "",
            photo: avatar,
            startDate: "",
            endDate: "",
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

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const handleTags = () => {
        setTags([...tags, text]);
        setCustomValue("tags", [...tags, text]);
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
        console.log("Data: " + JSON.stringify(data));
        mutate(data as Project);
        reset();
    };
    const actionLabel = useMemo(() => {
        if (step === STEPS.IMAGES) {
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
                    label="Project Title"
                    placeHolder="Project Title"
                    register={register}
                    icon={<LiaHeadingSolid />}
                    errors={errors}
                    required
                />
                <Calendar
                    onChange={(value) => setDateRange(value.selection)}
                    value={dateRange}
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
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            disabled={false}
            loading={isLoading}
            title="Create Project"
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.INFO ? undefined : onBack}
            body={bodyContent}
        />
    );
};

export default CreateProjectModal;
