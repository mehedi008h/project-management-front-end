import { useMemo, useState } from "react";
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
import { HiOutlineFolderAdd } from "react-icons/hi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormHeading, ImageUpload, InputField, Modal, TextareaField } from "..";
import { MdOutlineAlternateEmail } from "react-icons/md";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    TAG = 2,
    IMAGES = 3,
}

const AddProjectButton = () => {
    const [step, setStep] = useState(STEPS.INFO);
    const [tags, setTags] = useState<string[]>([]);
    const [text, setText] = useState("");
    // image state
    const [avatar, setAvatar] = useState("");
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            description: "",
            imageSrc: avatar,
            startDate: "",
            endDate: "",
            tags: tags,
        },
    });

    const imageSrc = watch("imageSrc");

    // upload photo
    const uploadAvatar = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result as string);
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
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.IMAGES) {
            return onNext();
        }
        console.log("Data: " + JSON.stringify(data));
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
                    id="name"
                    type="text"
                    label="Project Name"
                    placeHolder="Project Name"
                    register={register}
                    icon={<MdOutlineAlternateEmail />}
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
                        icon={<MdOutlineAlternateEmail />}
                        errors={errors}
                        required
                    />
                    <InputField
                        id="endDate"
                        type="date"
                        label="End Date"
                        placeHolder="End Date"
                        register={register}
                        icon={<MdOutlineAlternateEmail />}
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
        <Flex
            onClick={onOpen}
            justifyContent="center"
            alignItems="center"
            h={8}
            w={12}
            rounded="md"
            backgroundColor="maroon"
            cursor="pointer"
        >
            <HiOutlineFolderAdd size={20} />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                disabled={false}
                title="Create Project"
                actionLabel={actionLabel}
                onSubmit={handleSubmit(onSubmit)}
                secondaryActionLabel={secondaryActionLabel}
                secondaryAction={step === STEPS.INFO ? undefined : onBack}
                body={bodyContent}
            />
        </Flex>
    );
};

export default AddProjectButton;
