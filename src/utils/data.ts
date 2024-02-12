import art1 from '@/images/art1.png'

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
  workPhoto: string | any;
}

export const artistsData = [
  {
    id: 1,
    name: 'Raynaroc',
    instaUrl: 'https://www.instagram.com/miguel_gnz/',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua.',
    skills: [
      {
        id: 1,
        name: 'Fine Line'
      },
      {
        id: 2,
        name: 'Black & Grey'
      },
      {
        id: 3,
        name: 'Realismo'
      },
    ],
    avatar: 'raynaroc.jpg',
    workPhoto: art1
  }
] as Artist[]
