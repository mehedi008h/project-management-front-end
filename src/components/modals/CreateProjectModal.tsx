import { useMemo, useState } from "react";
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
import useCreateProject from "../../hooks/useCreateProject";
import { Project } from "../../domain/project";
import useProjectStore from "../../store/useProjectStore";
import { AiFillTags } from "react-icons/ai";

enum STEPS {
    INFO = 0,
    DATE = 1,
    TAG = 2,
    IMAGES = 3,
}

const CreateProjectModal = () => {
    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([]);
    const [tagValue, setTagValue] = useState<string>("");
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

    const handleTags = (e: any) => {
        if (e.key === "Enter" || (e.key === "," && tagValue)) {
            setTags([...tags, tagValue]);
            setCustomValue("tags", [...tags, tagValue]);
            setTagValue("");
        }
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
