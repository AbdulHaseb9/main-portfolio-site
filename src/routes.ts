import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

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
