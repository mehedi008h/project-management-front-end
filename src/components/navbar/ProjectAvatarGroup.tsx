import { Avatar, AvatarGroup, Skeleton } from "@chakra-ui/react";
import { User } from "../../domain/user";

interface Props {
    size: string;
    loading: boolean;
    developers?: User[] | undefined | null;
}

const ProjectAvatarGroup = ({ size, loading, developers }: Props) => {
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
            {developers &&
                developers.map((developer) => (
                    <Avatar
                        key={developer._id}
                        name={developer.firstName}
                        src={developer.photo ? developer.photo.url : ""}
                    />
                ))}
        </AvatarGroup>
    );
};

export default ProjectAvatarGroup;
