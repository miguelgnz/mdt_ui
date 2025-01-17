import { useState } from "react";
import { Alert, Button, Modal, styled, Typography } from "@mui/material";
import { useUser } from "@/context/UserContext";
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
  padding: "24px",
  width: "360px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  minHeight: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const FooterContent = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  marginTop: "16px",
}));

export default function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
}: Props) {
  const [selectedForm, setSelectedForm] = useState<"login" | "register">(
    "login"
  );

  const { userLoading, registrationSuccess, setRegistrationSuccess } =
    useUser();

  return (
    <Modal
      open={isLoginModalOpen}
      onClose={() => {
        setSelectedForm("login");
        setRegistrationSuccess(false);
        setIsLoginModalOpen(false);
      }}
    >
      <ModalContentWrapper>
        {userLoading ? (
          <CustomLoader color="secondary" />
        ) : (
          <>
            {/* Header */}
            <Typography variant="h4" mb={2}>
              {selectedForm === "login" ? "Iniciar sesión" : "Registrarse"}
            </Typography>

            {registrationSuccess && (
              <Alert severity="success" sx={{ mb: 2 }}>
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
              <Typography variant="body2" textAlign="center">
                {selectedForm === "login"
                  ? "¿No tienes cuenta?"
                  : "¿Ya tienes cuenta?"}
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
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
