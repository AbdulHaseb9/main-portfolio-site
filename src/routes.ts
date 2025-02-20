import { FaGithub, FaLinkedin } from "react-icons/fa";

type Route = { name: string; path: string };
type SocialLink = { name: string; path: string; icon: React.ElementType };

export const routes: Route[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
  { name: "Services", path: "#services" },
  { name: "Testimonials", path: "#testimonials" },
];

export const socialLinks: SocialLink[] = [
  { name: "Github", path: "https://github.com/abdulhaseb9/", icon: FaGithub },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/haseebdeveloper",
    icon: FaLinkedin,
  },
];
