import { Box, Typography, styled, Icon } from "@mui/material";
import { highlightsData } from "@/utils/data";
import Image from "next/image";
import Wolf from "@/icons/Wolf";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "64px",
  justifyContent: "center",
  padding: "64px 0",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "32px",
  },
}));

const HighlightWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    width: "100%",

  },
}));

const HighlightsSection = () => {
  return (
    <MainContainer>
      {highlightsData.map((e, index) => {
        return (
          <HighlightWrapper key={index}>
            <Box>
              <Image src={e.iconSrc} alt="logo" width={100} height={100} />
            </Box>
            <Typography color="primary" variant="h5" textAlign="center">
              {e.title}
            </Typography>
            <Typography color="primary" variant="body1" textAlign="center">
              {e.description}
            </Typography>
          </HighlightWrapper>
        );
      })}
      
    </MainContainer>
  );
};

export default HighlightsSection;
