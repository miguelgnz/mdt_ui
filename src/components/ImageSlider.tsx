import { Box, IconButton, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import {
  TbSquareRoundedChevronLeft,
  TbSquareRoundedChevronRight,
} from "react-icons/tb";
import { useState } from "react";

interface Props {
  imageUrls: string[] | any;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  position: "absolute",
  top: "0",
  bottom: "0",
  padding: "12px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(0, 0, 0, 0.2)",
  },
  "& > svg": {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {},
}));

const ImageSlider = ({ imageUrls }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      }
      return index - 1;
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: 'row',
          overflow: 'hidden'
        }}
      >
        {imageUrls.map((url: StaticImageData, index: number) => {
          return (
            <Image
              key={index}
              src={url}
              alt={`${url}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "0 0 12px 12px",
                translate: `${-100 * imageIndex}%`,
                flexShrink: '0',
                flexGrow: '0',
                transition: 'translate 200ms ease-in-out'
              }}
            />
          );
        })}
      </Box>
      <StyledIconButton
        color="primary"
        sx={{ left: "0" }}
        onClick={showNextImage}
      >
        <TbSquareRoundedChevronLeft />
      </StyledIconButton>
      <StyledIconButton
        color="primary"
        sx={{ right: "0" }}
        onClick={showPrevImage}
      >
        <TbSquareRoundedChevronRight />
      </StyledIconButton>
    </>
  );
};

export default ImageSlider;
