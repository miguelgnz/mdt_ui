import { Box, Typography, Button, TextField } from "@mui/material";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "@/services/auth";
import CustomLoader from "../CustomLoader";

type Props = {
  setIsLoginModalOpen: (value: boolean) => void;
};

const LoginForm = ({ setIsLoginModalOpen }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { userLoading, setUser, setIsAuthenticated } = useUser();

  const router = useRouter();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login(email, password);

      setLoading(false);

      if (!response.success) {
        setError("Correo electrónico o contraseña incorrectos");
        setEmail("");
        setPassword("");
      } else {
        setError("");
        setUser({
          email: response.user.email,
          firstName: response.user.firstName,
          lastName: response.user.lastName,
          phoneNumber: response.user.phoneNumber,
        });
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        setIsLoginModalOpen(false);
        router.push("/artist-profile");
      }
    } catch (error) {
      console.error(error);
      setError("Ocurrió un error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CustomLoader color="secondary" />;
  }

  return (
    <form onSubmit={onClickLogin} style={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TextField
          autoComplete="email"
          color="secondary"
          variant="outlined"
          label="Correo electrónico"
          required
          type="email"
          onFocus={() => setError(null)}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          autoComplete="current-password"
          color="secondary"
          variant="outlined"
          required
          type="password"
          label="Contraseña"
          onFocus={() => setError(null)}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
