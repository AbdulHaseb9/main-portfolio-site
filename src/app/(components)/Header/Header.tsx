"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { usePathname } from "next/navigation";
import { routes, socialLinks } from "@/routes";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <Container type="header" className="flex justify-between items-center">
        {/* Name & Navigation Links*/}
        <div className="flex items-center gap-x-28">
          <h1 className="text-3xl font-semibold">
            Haseeb <span className="text-yellow">Sheikh</span>
          </h1>
          {/* Links */}
          <nav className="space-x-4 hidden lg:block">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className={`font-semibold text-lg hover:text-yellow ${
                  pathname === route.path ? "text-yellow" : ""
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* Social Links */}
        <div className="flex gap-x-2">
          {socialLinks.map((social) => (
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
      </Container>
    </header>
  );
};
