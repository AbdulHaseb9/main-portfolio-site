import { Container } from "@/components/Container";
import { socialLinks } from "@/routes";
import Image from "next/image";
import profile from "/public/assets/profile.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container
      type="header"
      className="h-screen w-full items-center justify-between space-y-6 py-20 lg:flex"
    >
      {/* Left Side */}
      <div className="w-full space-y-4 lg:w-1/2">
        <h3 className="text-2xl lg:text-5xl">I'm</h3>
        <h1 className="text-gray text-4xl font-extrabold tracking-wider lg:text-7xl">
          Abdul Haseeb Sheikh
        </h1>
        <hr className="text-yellow w-36" />
        <p className="lg:w-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eius
          repudiandae nostrum libero illo temporibus aut, deleniti saepe error
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          nam, velit quod itaque quibusdam explicabo hic quos recusandae
        </p>
      </div>
      {/* Right Side */}
      <div className="w-full flex-col items-end space-y-4 text-start lg:flex lg:w-1/2">
        <h3 className="text-gray text-2xl">Services</h3>
        <h2 className="text-gray text-4xl lg:text-end">
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
              <social.icon className="bg-third text-yellow hover:bg-yellow rounded-full p-2 text-4xl hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-third top-1/2 left-1/2 -z-20 w-60 rounded-full px-8 lg:absolute lg:w-auto lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:p-7">
          <Image
            src={profile}
            alt="Profile Image"
            className="h-60 w-64 -rotate-2 rounded-full object-cover lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </Container>
  );
};
