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
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { menuData } from "@/utils/data";
import { useState } from "react";
import Image from "next/image";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#FFF",
  "& > p": {
    fontSize: "4px",
  },
  "& :hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {},
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    // backgroundColor: theme.palette.background.default,
    // border: '1px solid dimgrey'
    borderRadius: '14px'
  },
}));

const StyledMenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#02121F",
  "& > p": {},
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
          href="#home"
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
                    setAnchorEl(null);
                    setIsMenuOpen(false);
                  }}
                  key={item.id}
                  href={item.url}
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
              <StyledLink key={item.id} href={item.url}>
                <MenuItem>
                  <Typography variant="h5" fontWeight={400} letterSpacing={1.5}>{item.text}</Typography>
                </MenuItem>
              </StyledLink>
            );
          })}
        </LinksWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
