import { styled } from "@mui/material";

// Centered page column shared by every section.
const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "0 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

export default Container;
