import { Icon, Typography, styled } from "@mui/material";
import { IconType } from "react-icons";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  "& > svg": {
    width: "58px",
    height: "58px",
    color: theme.palette.primary.main,
  },
}));

type Props = {
  id?: number;
  label: string;
  icon: IconType;
};

const ContactInfoIcon = ({ id, label, icon }: Props) => {
  return (
    <MainContainer>
      <Icon component={icon} />
      <Typography color="primary" maxWidth={200} textAlign="center" sx={{textDecoration: 'none'}}>
        {label}
      </Typography>
    </MainContainer>
  );
};

export default ContactInfoIcon;
