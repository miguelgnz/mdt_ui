import HomePage from "@/views/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Estudio Mar de Tinta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Tattoo / Body Piercings" />
      </Head>
      <HomePage />
    </>
  );
}
