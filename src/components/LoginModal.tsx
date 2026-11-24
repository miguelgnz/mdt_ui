import { useState } from "react";
import {
  Alert,
  Button,
  IconButton,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { colors } from "@/styles/theme";
import CustomLoader from "./CustomLoader";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";

type Props = {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
};

const ModalContentWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(420px, calc(100% - 32px))",
  maxHeight: "calc(100% - 48px)",
  overflow: "auto",
  padding: "48px 32px 32px",
  backgroundColor: colors.surfaceRaised,
  border: `1px solid ${colors.lineStrong}`,
  borderRadius: "12px",
  minHeight: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  outline: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "48px 20px 24px",
  },
}));

const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: colors.muted,
  "&:hover": { color: colors.bone },
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  marginTop: "24px",
  paddingTop: "20px",
  borderTop: `1px solid ${colors.line}`,
}));

export default function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
}: Props) {
  const [selectedForm, setSelectedForm] = useState<"login" | "register">(
    "login",
  );

  const { userLoading, registrationSuccess, setRegistrationSuccess } =
    useUser();

  const closeModal = () => {
    setSelectedForm("login");
    setRegistrationSuccess(false);
    setIsLoginModalOpen(false);
  };

  return (
    <Modal
      open={isLoginModalOpen}
      onClose={closeModal}
      aria-labelledby="login-modal-title"
    >
      <ModalContentWrapper>
        <CloseButton aria-label="Cerrar" onClick={closeModal}>
          <FiX />
        </CloseButton>
        {userLoading ? (
          <CustomLoader color="secondary" />
        ) : (
          <>
            {/* Header */}
            <Image src="/mdt-logo.png" alt="" width={48} height={48} />
            <Typography
              id="login-modal-title"
              variant="h3"
              component="h2"
              mt={2}
              mb={3}
            >
              {selectedForm === "login" ? "Iniciar sesión" : "Registrarse"}
            </Typography>

            {registrationSuccess && (
              <Alert severity="success" sx={{ mb: 2, width: "100%" }}>
                ¡Registro exitoso! Ahora puedes iniciar sesión.
              </Alert>
            )}

            {/* Form */}
            {selectedForm === "login" ? (
              <LoginForm setIsLoginModalOpen={setIsLoginModalOpen} />
            ) : (
              <RegisterForm setSelectedForm={setSelectedForm} />
            )}

            {/* Footer */}
            <FooterContent>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                {selectedForm === "login"
                  ? "¿No tienes cuenta?"
                  : "¿Ya tienes cuenta?"}
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  setRegistrationSuccess(false);
                  setSelectedForm((prevState) => {
                    return prevState === "login" ? "register" : "login";
                  });
                }}
              >
                {selectedForm === "login" ? "Registrarse" : "Iniciar sesión"}
              </Button>
            </FooterContent>
          </>
        )}
      </ModalContentWrapper>
    </Modal>
  );
}
