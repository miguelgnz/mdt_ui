import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  styled,
} from "@mui/material";
import { loginUser } from "@/services/auth";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      setIsLoginModalOpen(false);
      // router.push("/dashboard");
    } catch (error) {
      console.error(error);
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
        <form onSubmit={onClickLogin}>
          <Typography variant="h6">Login</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <TextField
              variant="outlined"
              required
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="outlined" color="success">
              Login
            </Button>
            or
            <Button variant="text" color="secondary">
              Register
            </Button>
          </Box>
        </form>
      </ModalContentWrapper>
    </Modal>
  );
}
