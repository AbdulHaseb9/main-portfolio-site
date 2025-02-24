import { Container } from "@/components/Container";
import { socialLinks } from "@/routes";
import Image from "next/image";
import profile from "/public/assets/profile.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container
      type="header"
      className="h-screen w-full flex items-center justify-between"
    >
      {/* Left Side */}
      <div className="w-1/2 space-y-4">
        <h3 className="text-5xl">I'm</h3>
        <h1 className="text-gray text-7xl">Abdul Haseeb Sheikh</h1>
        <hr className="text-yellow w-36" />
        <p className="w-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eius
          repudiandae nostrum libero illo temporibus aut, deleniti saepe error
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          nam, velit quod itaque quibusdam explicabo hic quos recusandae
        </p>
      </div>
      {/* Right Side */}
      <div className="w-1/2 flex flex-col items-end space-y-4">
        <h3 className="text-gray text-2xl">Services</h3>
        <h2 className="text-gray text-4xl text-end">
          Let's build quality product in programming and design, with my
          service.
        </h2>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.path}
              target="_blank"
              title={social.name}
            >
              <social.icon className="text-4xl bg-third text-yellow p-2 rounded-full hover:bg-yellow hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
      <div className="-z-20 bg-third p-7 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={profile}
          alt="Profile Image"
          className="w-96 h-96 -rotate-2 rounded-full object-cover"
        />
      </div>
    </Container>
  );
};
