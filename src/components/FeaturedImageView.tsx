import { Typography, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colors } from "@/styles/theme";

type Props = {
  imageSrc: string | StaticImageData;
  avatarSrc: string;
  avatarSize: number;
  author: string;
  typographyVariant: any;
  primary?: boolean;
};

const Figure = styled("figure")(() => ({
  margin: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const Frame = styled("div")(() => ({
  position: "relative",
  flex: 1,
  minHeight: "240px",
  borderRadius: "4px",
  overflow: "hidden",
  "& img": { transition: "transform 600ms ease" },
  "&:hover img": { transform: "scale(1.03)" },
  "@media (prefers-reduced-motion: reduce)": {
    "&:hover img": { transform: "none" },
  },
}));

const FeaturedImageView = ({ imageSrc, author, primary = false }: Props) => {
  return (
    <Figure>
      <Frame
        sx={primary ? { minHeight: { xs: "420px", md: "520px" } } : undefined}
      >
        <Image
          src={imageSrc}
          alt={`Tatuaje por ${author}`}
          fill
          sizes={
            primary
              ? "(min-width: 900px) 600px, 100vw"
              : "(min-width: 900px) 300px, 50vw"
          }
          style={{ objectFit: "cover" }}
        />
      </Frame>
      <Typography component="figcaption" variant="body2" color="text.secondary">
        por <span style={{ color: colors.bone }}>{author}</span>
      </Typography>
    </Figure>
  );
};

export default FeaturedImageView;
