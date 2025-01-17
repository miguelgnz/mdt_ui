import { Box, Typography, Button, TextField, styled } from "@mui/material";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  setIsLoginModalOpen: (value: boolean) => void;
};

const LoginForm = ({ setIsLoginModalOpen }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLoading, loginUser, loginError } = useUser();

  const router = useRouter();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await loginUser(email, password);

    router.push("/artist-profile");
    setIsLoginModalOpen(false);
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
          onFocus={() => {}}
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

        {loginError !== "" && <Typography color="red">{loginError}</Typography>}

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
