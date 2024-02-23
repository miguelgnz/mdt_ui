import { Avatar, Chip, Icon, Typography, styled } from "@mui/material";
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
  minHeight: "555px",
  borderRadius: "12px",
  background: "#2D2C2C",
  "& > a": {
    textDecoration: "none",
  },
  [theme.breakpoints.down("md")]: {},
}));

const AvatarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: "-16px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));

const BioWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "8px 0",
  [theme.breakpoints.down("md")]: {},
}));

const SkillsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "8px 0",
  gap: "6px",
  minHeight: "64px",
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
}));

type Skill = {
  id: number;
  name: string;
};

const ArtistCard = (props: Props) => {
  return (
    <MainContainer>
      <Link href={props.instaUrl} target="blank">
        <UpperSubcardWrapper>
          <Icon
            component={FaInstagram}
            sx={{ color: "#FFF", fontSize: "28px" }}
          />
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
          <BioWrapper>
            <Typography color="primary" textAlign="center" variant="body2">
              {props.bio}
            </Typography>
          </BioWrapper>
          <SkillsWrapper>
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
          </SkillsWrapper>
        </UpperSubcardWrapper>
      </Link>
      <MediaWrapper>
        <ImageSlider imageUrls={props.artPhotos} />
      </MediaWrapper>
    </MainContainer>
  );
};

export default ArtistCard;
