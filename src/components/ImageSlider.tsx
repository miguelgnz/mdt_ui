import { Box, IconButton, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

interface Props {
  imageUrls: string[] | any;
  artistName?: string;
}

const NavButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "44px",
  height: "44px",
  color: "#edeae4",
  background: "rgba(10, 10, 10, 0.6)",
  backdropFilter: "blur(6px)",
  opacity: 0.9,
  transition: "opacity 150ms ease, background 150ms ease",
  "&:hover": { background: "rgba(10, 10, 10, 0.85)", opacity: 1 },
  "& > svg": { fontSize: "1.25rem" },
}));

const Dots = styled("div")(() => ({
  position: "absolute",
  left: "50%",
  bottom: "14px",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "6px",
}));

const ImageSlider = ({ imageUrls, artistName = "artista" }: Props) => {
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
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url: StaticImageData, index: number) => {
          return (
            <Image
              key={index}
              src={url}
              alt={`Trabajo de ${artistName} (${index + 1} de ${imageUrls.length})`}
              aria-hidden={index !== imageIndex}
              sizes="(min-width: 1200px) 300px, (min-width: 600px) 45vw, 90vw"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                translate: `${-100 * imageIndex}%`,
                flexShrink: "0",
                flexGrow: "0",
                transition: "translate 300ms ease-in-out",
              }}
            />
          );
        })}
      </Box>
      <NavButton
        aria-label="Imagen anterior"
        sx={{ left: "12px" }}
        onClick={showPrevImage}
      >
        <FiChevronLeft />
      </NavButton>
      <NavButton
        aria-label="Imagen siguiente"
        sx={{ right: "12px" }}
        onClick={showNextImage}
      >
        <FiChevronRight />
      </NavButton>
      <Dots aria-hidden="true">
        {imageUrls.map((_: unknown, index: number) => (
          <span
            key={index}
            style={{
              width: index === imageIndex ? "18px" : "6px",
              height: "6px",
              borderRadius: "999px",
              background:
                index === imageIndex ? "#edeae4" : "rgba(237, 234, 228, 0.45)",
              transition: "width 200ms ease",
            }}
          />
        ))}
      </Dots>
    </>
  );
};

export default ImageSlider;
