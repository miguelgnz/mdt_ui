import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  styled,
} from "@mui/material";
import { login } from "@/services/auth";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";
import CustomLoader from "./CustomLoader";

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
}));

export default function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const {
    user,
    isAuthenticated,
    loginUser,
    userLoading,
    setUserData,
    setIsUserLoading,
  } = useUser();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsUserLoading(true);
      const response = await login(email, password);

      if (response.success) {
        setUserData(response.data);
        localStorage.setItem("isAuthenticated", "true");
        router.push("/artist-profile");
        setIsLoginModalOpen(false);
      } else {
        setError("Credenciales incorrectos");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again later."); // Fallback for unknown errors
    } finally {
      setIsUserLoading(false);
    }
  };


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
            <form onSubmit={onClickLogin}>
              <Typography variant="h4" mb={2}>
                Iniciar sesión
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <TextField
                  color="secondary"
                  variant="outlined"
                  label="Correo electrónico"
                  required
                  type="email"
                  onFocus={() => {
                    setError(null);
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  color="secondary"
                  variant="outlined"
                  required
                  type="password"
                  label="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error !== "" && <Typography color="red">{error}</Typography>}

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={userLoading}
                >
                  Ingresar
                </Button>
                <Typography variant="body2" textAlign="center">
                  ¿No tienes una cuenta?
                </Typography>
                <Button variant="outlined" color="secondary">
                  Registrarse
                </Button>
              </Box>
            </form>
          </>
        )}
      </ModalContentWrapper>
    </Modal>
  );
}
