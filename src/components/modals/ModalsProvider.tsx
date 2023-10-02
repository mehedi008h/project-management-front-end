import {
    CreateProjectModal,
    InviteModal,
    ProfileUpdateModal,
    UpdateProjectModal,
} from "..";

const ModalsProvider = () => {
    return (
        <>
            <CreateProjectModal />
            <ProfileUpdateModal />
            <InviteModal />
            <UpdateProjectModal />
        </>
    );
};

export default ModalsProvider;
