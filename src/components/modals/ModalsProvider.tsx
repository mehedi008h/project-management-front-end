import {
    AssignDeveloperModal,
    AssignTaskModal,
    CreateProjectModal,
    InviteModal,
    ProfileUpdateModal,
    UpdateProjectModal,
    UpdateTaskModal,
} from "..";

const ModalsProvider = () => {
    return (
        <>
            <CreateProjectModal />
            <ProfileUpdateModal />
            <InviteModal />
            <UpdateProjectModal />
            <AssignTaskModal />
            <UpdateTaskModal />
            <AssignDeveloperModal />
        </>
    );
};

export default ModalsProvider;
