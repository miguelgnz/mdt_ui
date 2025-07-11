import { StaticImageData } from "next/image";

import { IconType } from "react-icons";
import {
  IoLogoInstagram,
  IoLocationOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

import art1 from "@/images/artist2/art1.jpg";
import art2 from "@/images/artist2/art2.jpg";
import art3 from "@/images/artist2/art3.jpg";
import art4 from "@/images/artist2/art4.jpg";

import Visa from "@/icons/visa.svg";
import MC from "@/icons/mastercard.svg";
import Amex from "@/icons/amex.svg";

import Wolf from "@/icons/wolf.svg";
import Rose from "@/icons/rose.svg";
import Skull from "@/icons/skull.svg";

export const menuData = {
  menu: {
    items: [
      {
        id: 1,
        text: "Artistas",
        url: "artists",
      },
      {
        id: 2,
        text: "Sobre Nosotros",
        url: "about",
      },
      {
        id: 3,
        text: "Arte",
        url: "art",
      },
      {
        id: 4,
        text: "Ubicación",
        url: "contact",
      },
    ],
  },
};

type HeroSection = {
  title: string;
  subtitle: string;
  actionButton: string;
};

export const heroSectionData = {
  title: "MAR DE TINTA",
  subtitle: "Tattoo / Body Piercings",
  actionButton: "AGENDA TU CITA",
} as HeroSection;

type Highlight = {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
};

export const highlightsData = [
  {
    id: 1,
    title: "Escuchamos",
    description:
      "Nos gusta escuchar las ideas que tienes, tu conocimiento en el mundo del tatuaje y saber más de ti y tus gustos.",
    iconSrc: Rose,
  },
  {
    id: 2,
    title: "Interpretamos",
    description:
      "Sabemos que tu tattoo sera para siempre, así que nos tomamos el tiempo y dedicación de interpretar tus ideas de una manera adecuada a la pieza de arte que buscas.",
    iconSrc: Wolf,
  },
  {
    id: 3,
    title: "Creamos",
    description:
      "Aquí tu también eres el protagonista, por lo tanto cada una de tus ideas nos aporta para llevar acabo el diseño final.",
    iconSrc: Skull,
  },
] as Highlight[];

type Skill = {
  id: number;
  name: string;
};

type Artist = {
  id: number;
  name: string;
  bio: string;
  instaUrl: string;
  skills: Skill[];
  avatar: string;
  featuredPhoto: StaticImageData;
  artPhotos?: StaticImageData[];
};

export const artistsData = [
  {
    id: 1,
    name: "Jaen Cuellar",
    instaUrl: "https://www.instagram.com/raynaroc",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "raynaroc.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
  {
    id: 2,
    name: "Andy Garay",
    instaUrl: "https://www.instagram.com/andy_garay_/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "andy.jpg",
    featuredPhoto: art1,
    artPhotos: [art3, art2, art1],
  },
  {
    id: 3,
    name: "Dylan",
    instaUrl: "https://www.instagram.com/dyland.tattooer/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "dylan.jpg",
    featuredPhoto: art1,
    artPhotos: [art3, art1, art2],
  },
  {
    id: 4,
    name: "Danny",
    instaUrl: "https://www.instagram.com/danny_inferno_/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "danny.jpg",
    featuredPhoto: art1,
    artPhotos: [art2, art1, art3],
  },
  {
    id: 5,
    name: "Nicole",
    instaUrl: "https://www.instagram.com/jossnicoletattoo/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "nicole.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
  {
    id: 6,
    name: "Cristy Calderón",
    instaUrl: "https://www.instagram.com/criss_calderonn/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "cristy.jpg",
    featuredPhoto: art1,
    artPhotos: [art2, art1, art3],
  },
  {
    id: 7,
    name: "Adaly Castrillo",
    instaUrl: "https://www.instagram.com/adalia_tattoo/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna.",
    skills: [
      {
        id: 1,
        name: "Fine Line",
      },
      {
        id: 2,
        name: "Black & Grey",
      },
      {
        id: 3,
        name: "Realismo",
      },
    ],
    avatar: "adaly.jpg",
    featuredPhoto: art1,
    artPhotos: [art3, art2, art1],
  },
] as Artist[];

type AboutSection = {
  title: string;
  description: string;
};

export const aboutSectionData = {
  title: "Para Quien es Mar de Tinta",
  description:
    "Mar de tinta nace con la intención de llevar el arte del tatuaje a personas que aprecian una bonita pieza de arte en la piel, más alla del tatuaje convencional, nosotros trabajamos para que tu experiencia desde la pieza 0 hasta la ultima sea una aventura distinta y personalizada a tu comodidad y estilo de vida.",
} as AboutSection;

export interface FeaturedImageData {
  imageSrc: string | StaticImageData;
  avatarSrc: string;
  avatarSize: number;
  author: string;
  typographyVariant: string;
}

export interface FeaturedSectionData {
  secondaryFeaturedImages: {
    row1: FeaturedImageData[];
    row2: FeaturedImageData[];
  };
  primaryFeaturedImage: FeaturedImageData;
}

export const featuredSectionData: FeaturedSectionData = {
  secondaryFeaturedImages: {
    row1: [
      {
        imageSrc: art1,
        avatarSrc: "nicole.jpg",
        avatarSize: 40,
        author: "Nicole",
        typographyVariant: "body2",
      },
      {
        imageSrc: art2,
        avatarSrc: "dylan.jpg",
        avatarSize: 40,
        author: "Dylan",
        typographyVariant: "body2",
      },
    ],
    row2: [
      {
        imageSrc: art3,
        avatarSrc: "andy.jpg",
        avatarSize: 40,
        author: "Andy Garay",
        typographyVariant: "body2",
      },
      {
        imageSrc: art1,
        avatarSrc: "danny.jpg",
        avatarSize: 40,
        author: "Danny",
        typographyVariant: "body2",
      },
    ],
  },
  primaryFeaturedImage: {
    imageSrc: art4,
    avatarSrc: "raynaroc.jpg",
    avatarSize: 60,
    author: "Raynaroc",
    typographyVariant: "body1",
  },
};

type ContactInfoData = {
  id: number;
  label: string;
  icon: IconType;
}[];

export const contactInfoData: ContactInfoData = [
  {
    id: 1,
    label:
      "Vía 6 02-71 Ruta 3 Edificio Silk local 103 y 102 Zona 4, Ciudad de Guatemala",
    icon: IoLocationOutline,
  },
  {
    id: 2,
    label: "+502 3136 6446",
    icon: IoPhonePortraitOutline,
  },
  {
    id: 3,
    label: "@estudio_mardetinta",
    icon: IoLogoInstagram,
  },
];

type ModalSlide = {
  title: string;
  body: string;
  icons?: any[];
};

export const modalSlidesdata = [
  {
    title: "Cotizar",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br><br> sunt in culpa qui officia deserunt mollit anim id est laborum. Tellus cras adipiscing enim eu turpis egestas pretium. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis",
  },
  {
    title: "Agendar",
    body: "Velit laoreet id donec ultrices tincidunt. Euismod lacinia at quis risus sed vulputate odio ut enim. Interdum consectetur.<br><br> Tellus cras adipiscing enim eu turpis egestas pretium. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis<br><br> feugiat vivamus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.",
  },
  {
    title: "Metodos de pago",
    body: "Puedes pagar con tarjeta de crédito/débito. <br><br> Aplica recargo del 10% <br><br> También contamos con visa cuotas, hasta 12 visa cuotas con el 15% de recargo",
    icons: [Visa, MC, Amex],
  },
];
