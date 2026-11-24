import { Typography } from "@mui/material";
import MainLayout from "@/styles/MainLayout";
import Container from "@/components/ui/Container";
type Props = {};

export default function ArtistProfilePage({}: Props) {
  return (
    <MainLayout>
      <Container
        as="main"
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          pt: "144px",
          pb: "96px",
        }}
      >
        <Typography variant="overline" color="text.secondary">
          Mi cuenta
        </Typography>
        <Typography variant="h2" component="h1">
          Artist Profile
        </Typography>
      </Container>
    </MainLayout>
  );
}
