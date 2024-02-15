import { StaticImageData } from "next/image";
import art1 from "@/images/artist2/art1.jpg";
import art2 from "@/images/artist2/art2.jpg";
import art3 from "@/images/artist2/art3.jpg";

export const menuData = {
  menu: {
    items: [
      {
        id: 1,
        text: "Artistas",
        url: "#artistas",
      },
      {
        id: 2,
        text: "Sobre Nosotros",
        url: "#nosotros",
      },
      {
        id: 3,
        text: "Arte",
        url: "#arte",
      },
      {
        id: 4,
        text: "Contacto",
        url: "#contacto",
      },
    ],
  },
};

type HeroSection = {
  title: string;
  subtitle: string;
  actionButton: string;
}

export const heroSectionData = {
  title: 'MAR DE TINTA',
  subtitle: 'Tattoo / Body Piercings',
  actionButton: 'AGENDA TU CITA'
} as HeroSection

type Highlight = {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
};

export const highlightsData = [
  {
    id: 1,
    title: "Diseños Personalizados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua.",
    iconSrc: "./rose.svg",
  },
  {
    id: 2,
    title: "Artistas con Experiencia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua.",
    iconSrc: "./wolf.svg",
  },
  {
    id: 3,
    title: "Productos Premium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua.",
    iconSrc: "./skull.svg",
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
    name: "Raynaroc",
    instaUrl: "https://www.instagram.com/miguel_gnz/",
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
      {
        id: 4,
        name: "TestDev",
      },
    ],
    avatar: "raynaroc.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
  {
    id: 2,
    name: "Nicole",
    instaUrl: "https://www.instagram.com/miguel_gnz/",
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
      {
        id: 4,
        name: "TestDev",
      },
    ],
    avatar: "raynaroc.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
  {
    id: 3,
    name: "Dylan",
    instaUrl: "https://www.instagram.com/miguel_gnz/",
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
      {
        id: 4,
        name: "TestDev",
      },
    ],
    avatar: "raynaroc.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
  {
    id: 4,
    name: "Dennis",
    instaUrl: "https://www.instagram.com/miguel_gnz/",
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
      {
        id: 4,
        name: "TestDev",
      },
    ],
    avatar: "raynaroc.jpg",
    featuredPhoto: art1,
    artPhotos: [art1, art2, art3],
  },
] as Artist[];

type AboutSection = {
  title: string;
  description: string;
};

export const aboutSectionData = {
  title: "Sobre Nosotros",
  description:
    "Et netus et malesuada fames. Mauris pharetra et ultrices neque ornare aenean. Suscipit tellus mauris a diam maecenas sed enim ut sem. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Tellus mauris a diam maecenas sed enim ut. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.",
} as AboutSection;
