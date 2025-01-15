import { GiSkullRing } from "react-icons/gi";
import { styled, keyframes } from "@mui/system";

type Props = {
  color: "primary" | "secondary";
};

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const LoaderIcon = styled(GiSkullRing)({
  fontSize: "3rem",
  animation: `${rotate} 2s linear infinite`,
  // color: "",
});

const CustomLoader = ({ color }: Props) => {
  return (
    <Loader>
      <LoaderIcon color={color} />
    </Loader>
  );
};

export default CustomLoader;
