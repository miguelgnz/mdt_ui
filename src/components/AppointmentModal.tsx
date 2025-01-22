import { IconButton, styled, Typography, Modal } from "@mui/material";
import { useState } from "react";
import {
  TbSquareRoundedChevronLeft,
  TbSquareRoundedChevronRight,
} from "react-icons/tb";
import Image from "next/image";
import { modalSlidesdata } from "@/utils/data";
import sanitizeHtlm from "sanitize-html";
import { IoMdClose } from "react-icons/io";

const ModalInnerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "440px",
  borderRadius: "16px",
  padding: "16px 64px",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.primary.main,
  maxHeight: "calc(100% - 64px)",
  height: "580px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  overflow: "auto",
  [theme.breakpoints.down("md")]: {
    width: "340px",
    height: "480px",
    padding: "16px 48px",
    overflow: "auto",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  position: "absolute",
  top: "50%",
  padding: "12px",
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

const StyledCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  display: "block",
  right: "4px",
  top: "4px",
  zIndex: "1",
  "& > svg": { fontSize: "1.8rem" },
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  width: "84%",
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

type Props = {
  modalOpen: boolean;
  handleClose: () => void;
};

const AppointmentModal = ({ modalOpen, handleClose }: Props) => {
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
    <Modal open={modalOpen} onClose={handleClose}>
      <ModalInnerContainer>
        <StyledCloseButton onClick={handleClose}>
          <IoMdClose />
        </StyledCloseButton>
        <ContentWrapper>
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
              __html: sanitizeHtlm(
                modalSlidesdata[slideIndex].body,
                sanitizeHtmlOptions
              ),
            }}
          />
          {/* Visa, MC, AMEX logos */}
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
        </ContentWrapper>
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
      </ModalInnerContainer>
    </Modal>
  );
};

export default AppointmentModal;
