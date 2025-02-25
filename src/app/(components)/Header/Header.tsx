"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { usePathname } from "next/navigation";
import { routes, socialLinks } from "@/routes";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [sideNav, setSideNav] = useState(false);
  const [bgHeader, setBgHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBgHeader(window.pageYOffset > 0),
      );
    }
  }, []);

  console.log(bgHeader);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-10 ${bgHeader ? "bg-third" : ""}`}
    >
      <Container type="header" className="flex items-center justify-between">
        {/* Name & Navigation Links*/}
        <div className="flex items-center gap-x-28">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Haseeb <span className="text-yellow">Sheikh</span>
          </h1>
          {/* Links */}
          <nav className="hidden space-x-4 lg:block">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className={`hover:text-yellow text-lg font-semibold ${
                  pathname === route.path ? "text-yellow" : ""
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-x-4 md:gap-x-7">
          <div className="flex gap-x-2 md:gap-x-4">
            {socialLinks.slice(0, 2).map((social) => (
              <Link
                key={social.name}
                href={social.path}
                target="_blank"
                title={social.name}
              >
                <social.icon className="text-2xl hover:text-white" />
              </Link>
            ))}
          </div>
          <HiOutlineBars3BottomRight
            onClick={() => setSideNav(!sideNav)}
            className="text-2xl lg:hidden"
          />
        </div>
      </Container>
    </header>
  );
};
