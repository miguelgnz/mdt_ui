import HomePage from "@/views/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Estudio Mar de Tinta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Tattoo / Body Piercings" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdt-ui.vercel.app/" />
        <meta property="og:title" content="Estudio Mar de Tinta" />
        <meta property="og:description" content="Tattoo / Body Piercings" />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mdt-ui.vercel.app/" />
        <meta property="twitter:title" content="Estudio Mar de Tinta" />
        <meta
          property="twitter:description"
          content="Tattoo / Body Piercings"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <HomePage />
    </>
  );
}
