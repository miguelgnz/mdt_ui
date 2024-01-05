import { Button, Typography, styled } from "@mui/material";

const BodyMainContainer = styled("div")(({ theme }) => ({
  // display: "flex",
  margin: '64px 0 0 0',
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  padding: '0 16px',
  [theme.breakpoints.down("md")]: {},
}));

const HomePageBody = () => {
  return (
    <BodyMainContainer id="body-main-container">
      <Typography color="primary" variant="h1">
        MAR DE TINTA
      </Typography>
      <Button color="primary" variant="outlined">
        CTA Button
      </Button>
    </BodyMainContainer>
  );
};

export default HomePageBody;
