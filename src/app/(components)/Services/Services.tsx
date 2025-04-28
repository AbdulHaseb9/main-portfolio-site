import { services } from "@/routes";
import { Container } from "../../../components/Container";
import Image from "next/image";

export const Services = () => {
  const Counter = [
    { count: 100, value: "Projects Complete" },
    { count: 74, value: "Customer Reviews" },
    { count: 40, value: "Students" },
  ];
  return (
    <Container
      type="container"
      className="bg-third flex flex-col items-center justify-center lg:h-screen lg:flex-row"
    >
      {/* Left Side Section Contain Heading, Paragraph and Counters */}
      <div className="w-full space-y-4 md:w-1/2">
        <h2 className="text-3xl font-semibold tracking-wider text-white">
          What Can I Do for <br /> Your Needs
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          minima asperiores labore alias dolor? Voluptatum soluta eligendi est
          tenetur ab dicta deserunt labore architecto maiores.
        </p>
        <div className="flex flex-wrap gap-7">
          {Counter.map((item, index) => (
            <div key={index}>
              <h2 className="text-yellow text-center text-4xl font-semibold">
                {item.count}+
              </h2>
              <p className="text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Right Side Section Contains, Services */}
      <div className="flex w-full flex-wrap justify-center gap-x-6 space-y-4 md:w-1/2">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex w-64 cursor-pointer items-center gap-4 overflow-hidden rounded-xl transition-all duration-1000"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="h-full w-full"
            />
            <div className="absolute bottom-0 w-full bg-black px-4 py-2 opacity-80">
              <h2 className="text-yellow text-xl font-semibold">
                {service.title}
              </h2>
              <p className="hidden text-sm group-hover:block">
                {service.subheading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
