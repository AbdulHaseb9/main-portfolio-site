import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { StaticImageData } from "next/image";
import service1 from "/public/assets/services/services1.jpg";
import service2 from "/public/assets/services/services2.jpg";
import service3 from "/public/assets/services/services3.jpg";
import service4 from "/public/assets/services/services4.jpg";

type Route = { name: string; path: string };
type SocialLink = { name: string; path: string; icon: React.ElementType };
type service = { image: StaticImageData; title: string; subheading: string };

export const routes: Route[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
  { name: "Services", path: "#services" },
  { name: "Testimonials", path: "#testimonials" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/haseebdeveloper",
    icon: FaLinkedin,
  },
  { name: "Github", path: "https://github.com/abdulhaseb9/", icon: FaGithub },
  {
    name: "Instagram",
    path: "https://github.com/abdulhaseb9/",
    icon: IoLogoInstagram,
  },
  {
    name: "Facebook",
    path: "https://github.com/abdulhaseb9/",
    icon: FaFacebook,
  },
];

export const services: service[] = [
  {
    image: service1,
    title: "Frontend Development",
    subheading: "Next.js, React.js, Tailwind CSS, TypeScript, JavaScript",
  },
  {
    image: service2,
    title: "Backend Development",
    subheading: "Node.js, Express.js, MongoDB, Web Sockets",
  },
  {
    image: service3,
    title: "Full-Stack Development",
    subheading:
      "Next.js, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, TypeScript, JavaScript, Web Sockets",
  },
  {
    image: service4,
    title: "Shopify",
    subheading:
      "Shopify Development, Shopify Theme Customization, Shopify App Development, Shopify Store Setup and Configuration",
  },
  {
    image: service2,
    title: "Wordpress",
    subheading:
      "Wordpress Theme Customization, Wordpress Store Setup and Configuration",
  },
];
