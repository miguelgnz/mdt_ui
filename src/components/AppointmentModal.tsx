import { IconButton, styled, Typography, Modal } from "@mui/material";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import Image from "next/image";
import { modalSlidesdata } from "@/utils/data";
import sanitizeHtlm from "sanitize-html";
import { colors } from "@/styles/theme";

const Panel = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(480px, calc(100% - 32px))",
  maxHeight: "calc(100% - 64px)",
  overflow: "auto",
  padding: "56px 48px 32px",
  borderRadius: "12px",
  background: colors.surfaceRaised,
  border: `1px solid ${colors.lineStrong}`,
  color: colors.bone,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  outline: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "56px 24px 24px",
  },
}));

const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: colors.muted,
  "&:hover": { color: colors.bone },
}));

const Controls = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  paddingTop: "8px",
  borderTop: `1px solid ${colors.line}`,
}));

const ArrowButton = styled(IconButton)(() => ({
  width: "44px",
  height: "44px",
  border: `1px solid ${colors.lineBright}`,
  color: colors.bone,
}));

const Dots = styled("div")(() => ({
  display: "flex",
  gap: "6px",
}));

const SlideIconsWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  padding: "12px",
  borderRadius: "8px",
  background: colors.bone,
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

  const slide = modalSlidesdata[slideIndex];

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="appointment-modal-title"
    >
      <Panel>
        <CloseButton aria-label="Cerrar" onClick={handleClose}>
          <FiX />
        </CloseButton>
        <Typography variant="overline" color="text.secondary">
          {slideIndex + 1} / {modalSlidesdata.length}
        </Typography>
        <Typography id="appointment-modal-title" variant="h2" component="h2">
          {slide.title}
        </Typography>
        <Typography
          color="text.secondary"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtlm(slide.body, sanitizeHtmlOptions),
          }}
        />
        {/* Visa, MC, AMEX logos */}
        {slide.icons && (
          <SlideIconsWrapper id="icons-box">
            {slide.icons.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={icon}
                  alt={["Visa", "Mastercard", "American Express"][index] ?? ""}
                  width={64}
                  height={64}
                />
              );
            })}
          </SlideIconsWrapper>
        )}
        <Controls>
          <ArrowButton aria-label="Anterior" onClick={showPrevSlide}>
            <FiChevronLeft />
          </ArrowButton>
          <Dots aria-hidden="true">
            {modalSlidesdata.map((item, index) => (
              <span
                key={item.title}
                style={{
                  width: index === slideIndex ? "18px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background:
                    index === slideIndex ? colors.bone : colors.lineBright,
                  transition: "width 200ms ease",
                }}
              />
            ))}
          </Dots>
          <ArrowButton aria-label="Siguiente" onClick={showNextSlide}>
            <FiChevronRight />
          </ArrowButton>
        </Controls>
      </Panel>
    </Modal>
  );
};

export default AppointmentModal;
