import { IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import {
  TbSquareRoundedChevronLeft,
  TbSquareRoundedChevronRight,
} from "react-icons/tb";
import Image from "next/image";
import { modalSlidesdata } from "@/utils/data";
import sanitizeHtlm from "sanitize-html";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  position: "absolute",
  top: "0",
  bottom: "0",
  padding: "12px",
  cursor: "pointer",
  borderRadius: '0px',
  "& > svg": {
    fontSize: "1.8rem",
    color: "rgba(0, 0, 0, 0.54)",
  },
  "&:hover": {
    backgroundColor: "rgb(0, 0, 0, 0.03)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px",
  },
}));

const ModalContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  [theme.breakpoints.down("md")]: {
    gap: "48px",
  },
}));
const SlideIconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    "& > img": {
      width: "64px",
      height: "64px",
    },
  },
}));

const AppointmentModal = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showNextSlide = () => {
    setSlideIndex((index) => {
      if (index === modalSlidesdata.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const showPrevSlide = () => {
    setSlideIndex((index) => {
      if (index === 0) {
        return modalSlidesdata.length - 1;
      }
      return index - 1;
    });
  };

  const sanitizeHtmlOptions = {
    allowedTags: ["br"],
    allowedAttributes: {},
    allowedIframeHostnames: [],
  };

  return (
    <>
      <ModalContentWrapper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        <Typography
          variant="h2"
          color={"#000"}
          textAlign={"center"}
          fontWeight={500}
        >
          {modalSlidesdata[slideIndex].title}
        </Typography>
        <Typography
          variant="body1"
          color={"#000"}
          textAlign={"center"}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtlm(modalSlidesdata[slideIndex].body, sanitizeHtmlOptions),
          }}
        />
        {modalSlidesdata[slideIndex].icons && (
          <SlideIconsWrapper id="icons-box">
            {modalSlidesdata[slideIndex].icons?.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={icon}
                  alt={index.toString()}
                  width={80}
                  height={80}
                />
              );
            })}
          </SlideIconsWrapper>
        )}
      </ModalContentWrapper>
      <StyledIconButton
        color="primary"
        sx={{ left: "0" }}
        onClick={showNextSlide}
      >
        <TbSquareRoundedChevronLeft />
      </StyledIconButton>
      <StyledIconButton
        color="primary"
        sx={{ right: "0" }}
        onClick={showPrevSlide}
      >
        <TbSquareRoundedChevronRight />
      </StyledIconButton>
    </>
  );
};

export default AppointmentModal;
