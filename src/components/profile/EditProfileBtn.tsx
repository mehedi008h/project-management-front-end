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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormHeading, ImageUpload, InputField, Modal, TextareaField } from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    TAG = 2,
    IMAGES = 3,
}
import { TbMoodEdit } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";

const EditProfileBtn = () => {
    const [step, setStep] = useState(STEPS.INFO);
    const [skills, setSkills] = useState<string[]>([]);
    const [text, setText] = useState("");
    // image state
    const [avatar, setAvatar] = useState("");
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            description: "",
            imageSrc: avatar,
            skills: skills,
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
                setCustomValue("imageSrc", reader.result as string);
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
        setSkills([...skills, text]);
        setCustomValue("tags", [...skills, text]);
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
                title="Share some basics about yourself"
                subtitle="What amenities do you have?"
            />
            <VStack spacing={5}>
                <HStack w="100%">
                    <InputField
                        id="firstName"
                        type="text"
                        label="First Name"
                        placeHolder="First Name"
                        register={register}
                        icon={<LiaHeadingSolid />}
                        errors={errors}
                        required
                    />
                    <InputField
                        id="lastName"
                        type="text"
                        label="Last Name"
                        placeHolder="Last Name"
                        register={register}
                        icon={<LiaHeadingSolid />}
                        errors={errors}
                        required
                    />
                </HStack>
                <InputField
                    id="phone"
                    type="number"
                    label="Phone Number"
                    placeHolder="Phone Number"
                    register={register}
                    icon={<AiOutlinePhone />}
                    errors={errors}
                    required
                />
                <InputField
                    id="address"
                    type="text"
                    label="Address"
                    placeHolder="Address"
                    register={register}
                    icon={<CiLocationOn />}
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
                    title="Add a photo of your"
                    subtitle="Show other what you looks like!"
                />
                <ImageUpload avatar={avatar} uploadAvatar={uploadAvatar} />
            </Flex>
        );
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="How would you describe your self?"
                    subtitle="Short and sweet works best!"
                />
                <VStack spacing={5}>
                    <InputField
                        id="work"
                        type="text"
                        label="Work"
                        placeHolder="Software Engineer ..."
                        register={register}
                        icon={<HiOutlineBuildingOffice2 />}
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
    }
    if (step === STEPS.TAG) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="Which of these best describes your skills?"
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
                    {skills.map((skill, i) => (
                        <Tag
                            size="md"
                            key={i}
                            borderRadius="full"
                            variant="solid"
                            colorScheme="green"
                            px={3}
                            py={1}
                        >
                            <TagLabel>{skill}</TagLabel>
                            <TagCloseButton
                                onClick={() =>
                                    setSkills(
                                        skills.filter((item) => item !== skill)
                                    )
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
            <Button
                onClick={onOpen}
                leftIcon={<TbMoodEdit size={20} />}
                rounded="full"
                size="sm"
                px={3}
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{ bgGradient: "linear(to-r, teal.600, green.600)" }}
            >
                Update Profile
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                disabled={false}
                title="Update Profile"
                actionLabel={actionLabel}
                onSubmit={handleSubmit(onSubmit)}
                secondaryActionLabel={secondaryActionLabel}
                secondaryAction={step === STEPS.INFO ? undefined : onBack}
                body={bodyContent}
            />
        </>
    );
};

export default EditProfileBtn;
