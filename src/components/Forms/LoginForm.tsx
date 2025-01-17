import { Box, Typography, Button, TextField, styled } from "@mui/material";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "@/services/auth";

type Props = {
  setIsLoginModalOpen: (value: boolean) => void;
};

const LoginForm = ({ setIsLoginModalOpen }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { userLoading, setUserData, setIsUserLoading } = useUser();

  const router = useRouter();

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
    <form onSubmit={onClickLogin} style={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
      </Box>
    </form>
  );
};

export default LoginForm;
