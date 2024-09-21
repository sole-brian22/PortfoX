export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Book Outlet",
    description:
      "Sandbox ecommerce site created using Next.js spun up in order to test search engine crawling, indexation, and performance on Core Web Vitals.",
    technologies: ["Next.js", "JSS", "Emotion", "Material UI"],
    demo: "https://bookoutlet.com/",
    image: require(".//../../public/projects/bookoutlet.png"),
    available: true,
  },
  {
    id: 2,
    name: "Poket FM",
    description:
      "Pocket FM boasts a vast collection of audio series spanning various genres. Whether you're into romance, horror, thriller, or drama, there's something for every listener.",
    technologies: ["React", "Next.js", "Radix UI", "Tailwind CSS"],
    demo: "https://pocketfm.com/gb",
    image: require(".//../../public/projects/pocketpm.png"),
    available: true,
  },
  {
    id: 3,
    name: "Gousto",
    description:
      "The Culinary Delights Meal Kit App is the result of our team's relentless dedication to transforming the way people cook and dine at home.",
    technologies: ["React", "Emotion", "Bootstrap"],
    demo: "https://www.gousto.co.uk/",
    image: require(".//../../public/projects/gousto.png"),
    available: true,
  },
  {
    id: 4,
    name: "Character AI",
    description:
      "This app allows users to interact with ultra-realistic AI personalities, enabling limitless possibilities for communication, entertainment, and productivity.",
    technologies: ["React", "Next.js", "Radix UI", "Tailwind CSS"],
    demo: "https://character.ai/",
    image: require(".//../../public/projects/cai.png"),
    available: true,
  },
  {
    id: 5,
    name: "Poliigon",
    description:
      "Poliigon is the leading source of photo-realistic textures for digital artists. Poliigon’s extensive library of files was a challenge to manage.",
    technologies: ["Vue.js", "Nuxt.js"],
    demo: "https://www.poliigon.com/",
    image: require(".//../../public/projects/poligon.png"),
    available: true,
  },
  {
    id: 6,
    name: "Kmart - Ecommerce",
    description:
      "The app's layout and navigation were carefully designed to ensure that users could effortlessly browse and shop for products.",
    technologies: ["React", "Next.js", "MUI"],
    demo: "https://www.kmart.com.au/",
    image: require(".//../../public/projects/kmart.png"),
    available: true,
  },
  {
    id: 7,
    name: "Training Mask",
    description:
      "TrainingMask has become a household name with athletes and fitness enthusiasts looking to take their training to the next level.",
    technologies: ["React", "Swiper", "MobX"],
    demo: "https://www.trainingmask.com/",
    image: require(".//../../public/projects/trainingmask.png"),
    available: true,
  },
  {
    id: 8,
    name: "Innovative AI",
    description:
      "MetaBrain Labs is a pioneering digital therapeutic app designed to revolutionize mental wellness.",
    technologies: ["React", "Next.js", "Radix UI", "Tailwind CSS"],
    demo: "https://demo.metabrainchatbot.com/",
    image: require(".//../../public/projects/metabrain.png"),
    available: true,
  },
  {
    id: 9,
    name: "Selleo Labs",
    description:
      "Lunch Assist is a platform dedicated to American schools providing support and guidance for nutrition professionals.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    demo: "https://selleo.com/",
    image: require(".//../../public/projects/selleo.png"),
    available: true,
  }
];
