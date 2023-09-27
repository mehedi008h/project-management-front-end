import { useEffect, useMemo, useState } from "react";
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
import { FormHeading, ImageUpload, InputField, Modal, TextareaField } from "..";
import { LiaHeadingSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    SKILL = 2,
    IMAGES = 3,
}

import { AiOutlinePhone } from "react-icons/ai";
import useProfileUpdate from "../../hooks/useProfileUpdate";
import { User } from "../../domain/user";
import useAuth from "../../hooks/useAuth";
import useUserStore from "../../store/useUserStore";
import { MdLocalActivity } from "react-icons/md";

const ProfileUpdateModal = () => {
    const { data: user, isLoading: userLoading } = useAuth();
    const [step, setStep] = useState(STEPS.INFO);
    const [skills, setSkills] = useState<string[]>([]);

    const [skillValue, setSkillValue] = useState<string>("");
    // image stskill
    const [avatar, setAvatar] = useState();
    // open & close modal
    const { isOpen, onClose } = useUserStore();

    const { mutate, isLoading } = useProfileUpdate();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            work: "",
            description: "",
            photo: avatar,
            skills: skills,
        },
    });

    useEffect(() => {
        if (user) {
            setSkills(user.skills);
            reset({
                firstName: user.firstName,
                lastName: user.lastName,
                description: user.description,
                phone: user.phone,
                address: user.address,
                work: user.work,
                skills: user.skills,
            });
        }
    }, [user, reset]);

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const handleTags = (e: any) => {
        if (e.key === "Enter" || (e.key === "," && skillValue)) {
            setSkills([...skills, skillValue]);
            setCustomValue("skills", [...skills, skillValue]);
            setSkillValue("");
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
        console.log("Data: " + JSON.stringify(data));
        mutate({ ...data } as User);
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
    if (step === STEPS.SKILL) {
        bodyContent = (
            <Flex flexDirection="column" gap={8}>
                <FormHeading
                    title="Which of these best describes your skills?"
                    subtitle="Add some skills"
                />
                {/* skills  */}
                <Box>
                    <HStack alignItems="center" spacing={2}>
                        <MdLocalActivity size={22} />
                        <Text>Skills</Text>
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
                        {skills.map((skill, i) => (
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
                                <TagLabel>{skill.toUpperCase()}</TagLabel>
                                <Box
                                    ms={1}
                                    h={4}
                                    w="1px"
                                    backgroundColor="gray.400"
                                    rounded="md"
                                ></Box>
                                <TagCloseButton
                                    onClick={() =>
                                        setSkills(
                                            skills.filter(
                                                (item) => item !== skill
                                            )
                                        )
                                    }
                                />
                            </Tag>
                        ))}
                        <Input
                            onChange={(e) => setSkillValue(e.target.value)}
                            onKeyDown={handleTags}
                            value={skillValue}
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
            loading={isLoading || userLoading}
            disabled={isLoading || userLoading}
            title="Update Profile"
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.INFO ? undefined : onBack}
            body={bodyContent}
        />
    );
};

export default ProfileUpdateModal;
