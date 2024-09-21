import { StaticImageData } from "next/image";
import andrew from "../../public/clients/andrew.webp";
import graham from "../../public/clients/graham.webp";
import neville from "../../public/clients/neville.webp";
import niall from "../../public/clients/niall.webp";
import paul from "../../public/clients/paul.webp";
import richard from "../../public/clients/richard.webp";
import saneet from "../../public/clients/saneet.webp";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Andrew M.",
    role: "Product Manager",
    company: "Epam",
    profileImg: andrew,
    testimonial:
      "Victor is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Graham M.",
    role: "IT Manager",
    company: "IBS Office Solutions Limited",
    profileImg: graham,
    testimonial:
      "Victor's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Neville Gordon",
    role: "IT & Security Manager",
    company: "Checkit",
    profileImg: neville,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Niall Thomas",
    role: "Product Manager",
    company: "Knightsbridge Commercial",
    profileImg: niall,
    testimonial:
      "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Paul Ray",
    role: "Manager",
    company: "Jacamo",
    profileImg: paul,
    testimonial:
      "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Richard Oliver",
    role: "Product Manager",
    company: "Discovery University UK",
    profileImg: richard,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  {
    name: "Saneet Gill",
    role: "IT Manager",
    company: "PCW Solutions",
    profileImg: saneet,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
];
