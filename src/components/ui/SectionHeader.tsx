import { Typography, styled } from "@mui/material";
import type { ReactNode } from "react";

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "16px",
}));

type Props = {
  id?: string;
  title: ReactNode;
  aside?: ReactNode;
};

// Section title on the left with an optional short note or link on the right.
const SectionHeader = ({ id, title, aside }: Props) => {
  return (
    <Wrapper>
      <Typography id={id} variant="h2" component="h2">
        {title}
      </Typography>
      {aside && (
        <Typography
          component="div"
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "44ch" }}
        >
          {aside}
        </Typography>
      )}
    </Wrapper>
  );
};

export default SectionHeader;
