import { Avatar, Box, Chip, Icon, Typography, styled } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "340px",
  height: "520px",
  borderRadius: "12px",
  background: "#2D2C2C",
  [theme.breakpoints.down("md")]: {},
}));

const AvatarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: '-16px',
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
  justifyContent: "center",
  margin: "8px 0",
  gap: "6px",
  [theme.breakpoints.down("md")]: {},
}));

const MediaWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "218px",
  [theme.breakpoints.down("md")]: {},
}));

const UpperSubcardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "16px 12px",
  [theme.breakpoints.down("md")]: {},
}));

type Skill = {
  id: number;
  name: string;
};

interface Props {
  id: number;
  name: string;
  instaUrl: string;
  bio: string;
  skills: Skill[];
  avatar: string;
  workPhoto: string;
}

const ArtistCard = (props: Props) => {
  return (
    <MainContainer>
      <UpperSubcardWrapper>
        {/* <Box> */}
          <Link href={props.instaUrl} target="blank">
            <Icon
              component={FaInstagram}
              sx={{ color: "#FFF", fontSize: "28px" }}
            />
          </Link>
        {/* </Box> */}
        <AvatarWrapper>
          <Avatar
            alt={props.name}
            src={props.avatar}
            sx={{ width: "82px", height: "82px" }}
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
      <MediaWrapper>
        <Image
          alt={props.name}
          src={props.workPhoto}
          width={100}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "0 0 12px 12px"
          }}
        />
      </MediaWrapper>
    </MainContainer>
  );
};

export default ArtistCard;
