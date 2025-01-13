import { Typography } from "@mui/material";
import MainLayout from "@/styles/MainLayout";
type Props = {};

export default function ArtistProfilePage({}: Props) {
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "64px",
        }}
      >
        <Typography variant="h1" color="yellow">
          Artist Profile
        </Typography>
      </div>
    </MainLayout>
  );
}
