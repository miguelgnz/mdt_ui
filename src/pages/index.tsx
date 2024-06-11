import HomePage from "@/views/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Estudio Mar de Tinta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tattoo / Body Piercings" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Estudio Mar de Tinta" />
        <meta property="og:description" content="Tattoo / Body Piercings" />
        <meta property="og:image" content="/mdt-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mardetinta.org" />
      </Head>
      <HomePage />
    </>
  );
}
