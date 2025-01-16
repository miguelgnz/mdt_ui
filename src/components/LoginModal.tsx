import { Modal, styled } from "@mui/material";

import { useUser } from "@/context/UserContext";
import CustomLoader from "./CustomLoader";
import LoginForm from "./Forms/LoginForm";

type Props = {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
};

const ModalContentWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "24px",
  width: "360px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  minHeight: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
}: Props) {
  const { userLoading } = useUser();

  return (
    <Modal
      open={isLoginModalOpen}
      onClose={() => {
        setIsLoginModalOpen(false);
      }}
    >
      <ModalContentWrapper>
        {userLoading ? (
          <CustomLoader color="secondary" />
        ) : (
          <>
            <LoginForm setIsLoginModalOpen={setIsLoginModalOpen} />
          </>
        )}
      </ModalContentWrapper>
    </Modal>
  );
}
