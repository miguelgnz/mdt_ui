import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Divider } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Divider sx={{ borderColor: "dimgrey" }} variant="middle" />
      <Footer />
    </>
  );
};

export default MainLayout;
