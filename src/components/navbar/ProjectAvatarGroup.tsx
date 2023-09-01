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
                    <Skeleton key={item} h={6} w={6} rounded="full" />
                ))}
            </AvatarGroup>
        );
    return (
        <AvatarGroup size={size} max={4}>
            <Avatar name="Ryan Florence" />
            <Avatar name="Segun Adebayo" />
            <Avatar name="Kent Dodds" />
            <Avatar name="Prosper Otemuyiwa" />
            <Avatar name="Christian Nwamba" />
        </AvatarGroup>
    );
};

export default ProjectAvatarGroup;
