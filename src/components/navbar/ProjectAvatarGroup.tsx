import { Avatar, AvatarGroup, Skeleton } from "@chakra-ui/react";

interface Props {
    size: string;
    loading: boolean;
}

const ProjectAvatarGroup = ({ size, loading }: Props) => {
    if (loading)
        return (
            <AvatarGroup size={size} max={4}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <Skeleton key={item} boxSize={6} rounded="full" />
                ))}
            </AvatarGroup>
        );
    return (
        <AvatarGroup size={size} max={4}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
    );
};

export default ProjectAvatarGroup;
