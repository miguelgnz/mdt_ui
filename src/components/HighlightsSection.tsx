import { Typography, styled } from "@mui/material";
import { highlightsData } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  padding: "112px 0",
  [theme.breakpoints.down("md")]: {
    padding: "80px 0",
  },
}));

const Steps = styled(motion.ol)(() => ({
  margin: "56px 0 0",
  padding: 0,
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1px",
  background: colors.line,
  border: `1px solid ${colors.line}`,
}));

const Step = styled(motion.li)(() => ({
  background: colors.ink,
  padding: "40px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HighlightsSection = () => {
  return (
    <Section aria-labelledby="proceso">
      <Container>
        <SectionHeader
          id="proceso"
          title="Cómo trabajamos"
          aside="Tu tatuaje es para siempre. Por eso cada pieza pasa por tres momentos contigo."
        />
        <Steps
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {highlightsData.map((e, index) => {
            return (
              <Step key={e.id} variants={item}>
                <Image
                  src={e.iconSrc}
                  alt=""
                  width={64}
                  height={64}
                  style={{ opacity: 0.9 }}
                />
                <Typography
                  variant="caption"
                  sx={{ letterSpacing: "0.18em", color: colors.subtle }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="h4" component="h3">
                  {e.title}
                </Typography>
                <Typography color="text.secondary">{e.description}</Typography>
              </Step>
            );
          })}
        </Steps>
      </Container>
    </Section>
  );
};

export default HighlightsSection;
