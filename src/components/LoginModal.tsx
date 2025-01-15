import { useState, useEffect } from "react";
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

  const router = useRouter();

  const {
    user,
    isAuthenticated,
    login,
    userLoading,
    setUserData,
    setIsUserLoading,
  } = useUser();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsUserLoading(true);
      const response = await loginUser(email, password);
      setUserData(response);
      // Set in local storage for later use in useEffect in userCtx
      localStorage.setItem("isAuthenticated", "true");
      setIsUserLoading(false);
      router.push("/artist-profile");
    } catch (error) {
      console.error(error);
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
              <Typography variant="h6">Login</Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
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
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={userLoading}
                >
                  Login
                </Button>
                <Typography variant="body2">
                  Don&apos;t have an account?
                </Typography>
                <Button variant="outlined" color="secondary">
                  Register
                </Button>
              </Box>
            </form>
          </>
        )}
      </ModalContentWrapper>
    </Modal>
  );
}
