import { Icon, styled } from "@mui/material";
import { IconType } from "react-icons";
import { colors } from "@/styles/theme";

const Row = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  "& dt": {
    flex: "none",
    color: colors.muted,
    lineHeight: 0,
    paddingTop: "2px",
  },
  "& dd": { margin: 0, color: colors.bone },
}));

type Props = {
  id?: number;
  label: string;
  icon: IconType;
  description?: string;
};

// One line of contact information (icon + text) inside a <dl>.
const ContactInfoIcon = ({ label, icon, description }: Props) => {
  return (
    <Row>
      <dt>
        <Icon component={icon} aria-label={description} sx={{ fontSize: 20 }} />
      </dt>
      <dd>{label}</dd>
    </Row>
  );
};

export default ContactInfoIcon;
