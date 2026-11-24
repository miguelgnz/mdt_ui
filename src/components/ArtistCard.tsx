import { Avatar, Typography, styled } from "@mui/material";
import { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import { colors } from "@/styles/theme";

interface Props {
  id: number;
  name: string;
  instaUrl: string;
  bio: string;
  skills: Skill[];
  avatar: string;
  featuredPhoto: StaticImageData;
  artPhotos?: StaticImageData[];
}

type Skill = {
  id: number;
  name: string;
};

const Card = styled("article")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const MediaWrapper = styled("div")(() => ({
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 5",
  borderRadius: "4px",
  overflow: "hidden",
  background: colors.surface,
}));

const InfoRow = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

const InstagramLink = styled("a")(() => ({
  marginLeft: "auto",
  display: "inline-flex",
  padding: "10px",
  margin: "-10px -10px -10px auto",
  color: colors.muted,
  borderRadius: "999px",
  transition: "color 150ms ease",
  "&:hover": { color: colors.bone },
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "2px",
  },
}));

const extractUsernameFromUrl = (url: string): string | null => {
  const baseUrl = "https://www.instagram.com/";
  if (url.startsWith(baseUrl)) {
    const username = url.substring(baseUrl.length).split("/")[0];
    return username || null;
  }
  return null;
};

const ArtistCard = (props: Props) => {
  const username = extractUsernameFromUrl(props.instaUrl);

  return (
    <Card>
      <MediaWrapper>
        <ImageSlider imageUrls={props.artPhotos} artistName={props.name} />
      </MediaWrapper>
      <InfoRow>
        <Avatar
          alt=""
          src={props.avatar}
          sx={{ width: 44, height: 44, filter: "grayscale(1)" }}
        />
        <div>
          <Typography variant="h5" component="h3">
            {props.name}
          </Typography>
          {username && (
            <Typography variant="body2" sx={{ color: colors.subtle }}>
              @{username}
            </Typography>
          )}
        </div>
        <InstagramLink
          href={props.instaUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Instagram de ${props.name}`}
        >
          <FaInstagram size={18} aria-hidden="true" />
        </InstagramLink>
      </InfoRow>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ letterSpacing: "0.04em" }}
      >
        {props.skills.map((skill) => skill.name).join(" · ")}
      </Typography>
    </Card>
  );
};

export default ArtistCard;
