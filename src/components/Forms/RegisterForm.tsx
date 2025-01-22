import { useState } from "react";
import { Button, styled, TextField, Typography } from "@mui/material";
import { useUser } from "@/context/UserContext";

type Props = {
  setSelectedForm: (value: "login" | "register") => void;
};

const FieldsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

const RegisterForm = ({ setSelectedForm }: Props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { registerUser, registrationError } = useUser();

  const nameIsValid = (name: string) => {
    //Should not include any special characters or numbers
    return /^[A-Za-z\s]*$/.test(name);
  };

  const phoneIsValid = () => {
    //Should not include any special characters or letters
    return /^[0-9]*$/.test(phone);
  };

  const passwordIsValid = (password: string) => {
    //Should have at least 8 characters
    return password.length >= 8;
  };

  const formIsValid = () => {
    return (
      nameIsValid(name) &&
      nameIsValid(lastName) &&
      phoneIsValid() &&
      email.length > 0 &&
      passwordIsValid(password) &&
      password === confirmPassword
    );
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await registerUser(email, password, name, lastName, phone);
  };

  return (
    <form onSubmit={handleOnSubmit} style={{ width: "100%" }}>
      <FieldsWrapper>
        <TextField
          color="secondary"
          variant="outlined"
          label="Nombre"
          required
          type="text"
          error={!nameIsValid(name)}
          helperText={
            !nameIsValid(name)
              ? "El nombre no debe contener números ni caracteres especiales"
              : ""
          }
          onFocus={() => {}}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          color="secondary"
          variant="outlined"
          label="Apellido"
          required
          type="text"
          error={!nameIsValid(lastName)}
          helperText={
            !nameIsValid(lastName)
              ? "El apellido no debe contener números ni caracteres especiales"
              : ""
          }
          onFocus={() => {}}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        {/* Extra field to select area code from a list */}
        <TextField
          color="secondary"
          variant="outlined"
          label="Teléfono"
          required
          type="tel"
          onFocus={() => {}}
          error={!phoneIsValid()}
          helperText={
            !phoneIsValid()
              ? "El teléfono no debe contener letras ni caracteres especiales"
              : ""
          }
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <TextField
          autoComplete="email"
          color="secondary"
          variant="outlined"
          label="Correo electrónico"
          required
          type="email"
          onFocus={() => {}}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          autoComplete="new-password"
          color="secondary"
          variant="outlined"
          required
          type="password"
          label="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={!passwordIsValid(password)}
          helperText={
            !passwordIsValid(password)
              ? "La contraseña debe tener al menos 8 caracteres"
              : ""
          }
        />
        <TextField
          autoComplete="new-password"
          color="secondary"
          variant="outlined"
          required
          type="password"
          label="Confirmar contraseña"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {registrationError && (
          <Typography color="red">{registrationError}</Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={!formIsValid()}
        >
          Registrarse
        </Button>
      </FieldsWrapper>
    </form>
  );
};

export default RegisterForm;
