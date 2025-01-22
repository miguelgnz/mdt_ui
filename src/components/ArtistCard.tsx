import {
  Avatar,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

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

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "340px",
  height: "auto",
  borderRadius: "12px",
  background: "#2D2C2C",
  "& > a": {
    textDecoration: "none",
  },
}));

const AvatarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "26px 4px",
  alignItems: "center",
}));

const BioWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "8px 0",
}));

const SkillsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "24px 0",
  gap: "6px",
}));

const MediaWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "100%",
  height: "259px",
  [theme.breakpoints.down("md")]: {
    height: "271px",
  },
}));

const UpperSubcardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "16px 12px 0 12px",
}));

type Skill = {
  id: number;
  name: string;
};

const ArtistCard = (props: Props) => {
  const extractUsernameFromUrl = (url: string): string | null => {
    const baseUrl = "https://www.instagram.com/";
    if (url.startsWith(baseUrl)) {
      const username = url.substring(baseUrl.length).split("/")[0];
      return username || null;
    }
    return null;
  };

  return (
    <MainContainer>
      <UpperSubcardWrapper>
        <Button
          startIcon={<FaInstagram />}
          size="small"
          href={props.instaUrl}
          target="_blank"
        >
          {`@${extractUsernameFromUrl(props.instaUrl)}`}
        </Button>
        {/* <Link href={props.instaUrl} rel="noreferrer"> */}
        <AvatarWrapper>
          <Avatar
            alt={props.name}
            src={props.avatar}
            sx={{
              width: "82px",
              height: "82px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
          <Typography color="primary" variant="h6">
            {props.name}
          </Typography>
        </AvatarWrapper>
        {/* </Link> */}
        {/* <SkillsWrapper>
            {props.skills.map((skill, index) => {
              return (
                <Chip
                  key={index}
                  color="primary"
                  variant="outlined"
                  label={skill.name}
                />
              );
            })}
          </SkillsWrapper> */}
      </UpperSubcardWrapper>
      <MediaWrapper>
        <ImageSlider imageUrls={props.artPhotos} />
      </MediaWrapper>
    </MainContainer>
  );
};

export default ArtistCard;
