"use client";

import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { MdOutlineLogout } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";

type Props = {
  firstName: string;
  lastName: string;
};

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: deepOrange[500],
  width: "44px",
  height: "44px",
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {},
}));

const UserAvatar = ({ firstName, lastName }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const { logoutUser } = useUser();
  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    logoutUser();
    setAnchorEl(null);
    router.push("/");
  };

  return (
    <>
      <IconButton
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <StyledAvatar>{`${firstName[0]}${lastName[0]}`}</StyledAvatar>
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
          <Button
            startIcon={<LuUser />}
            color="secondary"
            onClick={() => {
              router.push("/artist-profile");
            }}
          >
            Perfil
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            startIcon={<MdOutlineLogout />}
            color="secondary"
            onClick={onClickLogout}
          >
            Cerrar sesión
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
