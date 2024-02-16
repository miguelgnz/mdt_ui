import { Avatar, styled, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type Props = {
  imageSrc: string | StaticImageData;
  avatarSrc: string;
  avatarSize: number;
  author: string;
  typographyVariant: any;
};

const AvatarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "6px",
  "& > p": {
    display: "flex",
    alignItems: "flex-end",
  },
  [theme.breakpoints.down("md")]: {},
}));

const FeaturedImageView = ({
  imageSrc,
  avatarSrc,
  avatarSize,
  author,
  typographyVariant,
}: Props) => {
  return (
    <>
      <Image
        src={imageSrc}
        alt={author}
        fill
        style={{
          objectFit: "cover",
          borderRadius: "16px",
          objectPosition: "center",
          zIndex: "-1",
        }}
      />
      <AvatarContainer>
        <Avatar
          src={avatarSrc}
          alt={author}
          sx={{
            width: { xs: `${avatarSize - 10}px`, md: `${avatarSize}px` },
            height: { xs: `${avatarSize - 10}px`, md: `${avatarSize}px` },
          }}
        />
        <Typography
          color="primary"
          variant={typographyVariant}
          letterSpacing={1}
        >
          {`By ${author}`}
        </Typography>
      </AvatarContainer>
    </>
  );
};

export default FeaturedImageView;
