import { InviteNewMember, Modal } from "..";
import useInviteStore from "../../store/useInviteStore";

const InviteModal = () => {
    const { isOpen, onClose } = useInviteStore();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            disabled={false}
            title="Invite Teammember"
            body={<InviteNewMember />}
        />
    );
};

export default InviteModal;
