import Link from "next/link";
import { Button } from "@/components/ui/button";

type NavigationLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  links: NavigationLink[];
  ctaButton: {
    label: string;
    href: string;
  };
};

type HeaderProps = {
  navigation: NavigationProps;
  siteName: string;
};

export default function Header({ navigation, siteName }: HeaderProps) {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-900">{siteName}</span>
        </Link>
        <nav>
          <ul className="hidden md:flex space-x-8">
            {navigation.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-blue-900 hover:text-blue-600 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="bg-blue-900 text-white hover:bg-blue-800">
          {navigation.ctaButton.label}
        </Button>
      </div>
    </header>
  );
}
