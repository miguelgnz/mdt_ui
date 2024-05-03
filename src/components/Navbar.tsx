import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  styled,
  Menu,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { menuData } from "@/utils/data";
import { useState } from "react";
import Image from "next/image";
import { navigateHomePage } from "@/utils/navigateHomePage";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "14px",
  },
}));

const StyledMenuLink = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: "#02121F",
}));

const StyledMenuBtn = styled(Button)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 400,
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <StyledAppbar position="fixed">
      <Toolbar>
        <IconButton
          onClick={() => {
            navigateHomePage("home");
          }}
          size="large"
          edge="start"
          sx={{ color: "#f0f0f0" }}
        >
          <Image alt="logo" src={"/mdt-logo.png"} width={40} height={40} />
        </IconButton>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            aria-label="menu"
            sx={{ color: "#f0f0f0" }}
            onClick={handleMenu}
            edge="end"
          >
            <FiMenu />
          </IconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuData.menu.items.map((item) => {
              return (
                <StyledMenuLink
                  onClick={() => {
                    navigateHomePage(item.url);
                    setIsMenuOpen(false);
                  }}
                  key={item.id}
                >
                  <MenuItem>
                    <Typography>{item.text}</Typography>
                  </MenuItem>
                  <Divider variant="middle" />
                </StyledMenuLink>
              );
            })}
          </StyledMenu>
        </Box>
        <LinksWrapper>
          {menuData.menu.items.map((item) => {
            return (
              <MenuItem key={item.id}>
                <StyledMenuBtn
                  onClick={() => {
                    navigateHomePage(item.url);
                  }}
                >
                  {item.text}
                </StyledMenuBtn>
              </MenuItem>
            );
          })}
        </LinksWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
