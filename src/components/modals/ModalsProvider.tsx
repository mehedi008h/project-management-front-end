import { CreateProjectModal, InviteModal, ProfileUpdateModal } from "..";

const ModalsProvider = () => {
    return (
        <>
            <CreateProjectModal />
            <ProfileUpdateModal />
            <InviteModal />
        </>
    );
};

export default ModalsProvider;
