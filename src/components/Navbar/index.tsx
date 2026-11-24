import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  styled,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { FiMenu, FiUser } from "react-icons/fi";
import { menuData } from "@/utils/data";
import { useState } from "react";
import Image from "next/image";
import { navigateHomePage } from "@/utils/navigateHomePage";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";
import { colors } from "@/styles/theme";
import LoginModal from "../LoginModal";
import AppointmentModal from "../AppointmentModal";
import UserAvatar from "./UserAvatar";

const StyledAppbar = styled(AppBar)(() => ({
  backgroundColor: "rgba(10, 10, 10, 0.86)",
  backdropFilter: "blur(12px)",
  backgroundImage: "none",
  border: "none",
  borderBottom: `1px solid ${colors.line}`,
  boxShadow: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  maxWidth: "1240px",
  margin: "0 auto",
  minHeight: "72px",
  justifyContent: "space-between",
  gap: "24px",
  padding: "0 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "0 24px",
    minHeight: "72px",
  },
}));

const Brand = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "4px",
  margin: "-4px",
  background: "none",
  border: "none",
  color: colors.bone,
  cursor: "pointer",
  fontFamily: theme.typography.h6.fontFamily,
  fontSize: "24px",
  fontWeight: 500,
  letterSpacing: "0.02em",
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "3px",
    borderRadius: "4px",
  },
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavLink = styled("button")(({ theme }) => ({
  ...theme.typography.body2,
  background: "none",
  border: "none",
  padding: "10px 0",
  color: colors.muted,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  transition: "color 150ms ease",
  "&:hover": { color: colors.bone },
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "3px",
    borderRadius: "4px",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const router = useRouter();

  const { isAuthenticated, user } = useUser();

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
      <StyledToolbar disableGutters>
        <Brand
          type="button"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image alt="" src={"/mdt-logo.png"} width={40} height={40} />
          Mar de Tinta
        </Brand>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {isAuthenticated ? (
            <UserAvatar firstName={user.firstName} lastName={user.lastName} />
          ) : (
            <>
              <IconButton
                aria-label="Abrir menú"
                sx={{ color: colors.bone }}
                onClick={handleMenu}
                edge="end"
              >
                <FiMenu />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { minWidth: 220, p: 1 } } }}
              >
                {menuData.menu.items.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      sx={{ borderRadius: "8px", py: 1.25 }}
                      onClick={() => {
                        navigateHomePage(item.url);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.text}
                    </MenuItem>
                  );
                })}
                <Box sx={{ display: "grid", gap: 1, pt: 1 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAppointmentOpen(true);
                    }}
                  >
                    Agenda tu cita
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                  >
                    Ingresar
                  </Button>
                </Box>
              </Menu>
            </>
          )}
        </Box>

        <LinksWrapper>
          {menuData.menu.items.map((item) => {
            return (
              <NavLink
                key={item.id}
                type="button"
                onClick={() => {
                  navigateHomePage(item.url);
                }}
              >
                {item.text}
              </NavLink>
            );
          })}
          {isAuthenticated && user.firstName && user.lastName ? (
            <UserAvatar firstName={user.firstName} lastName={user.lastName} />
          ) : (
            <NavLink
              type="button"
              onClick={() => {
                setIsLoginModalOpen(true);
              }}
            >
              <FiUser aria-hidden="true" />
              Ingresar
            </NavLink>
          )}
          <Button
            variant="contained"
            onClick={() => {
              setIsAppointmentOpen(true);
            }}
          >
            Agenda tu cita
          </Button>
        </LinksWrapper>
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
        <AppointmentModal
          modalOpen={isAppointmentOpen}
          handleClose={() => setIsAppointmentOpen(false)}
        />
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Navbar;
