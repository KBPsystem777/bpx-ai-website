import type React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

type FooterProps = {
  content: {
    companyDescription: string;
    contactInfo: {
      email: string;
      phone: string;
      address: string;
    };
    socialLinks: Array<{
      platform: string;
      href: string;
    }>;
    quickLinks: Array<{
      label: string;
      href: string;
    }>;
    copyright: string;
  };
};

export default function Footer({ content }: FooterProps) {
  // Map social platform names to icon components
  const socialIconMap: Record<string, React.ElementType> = {
    Facebook,
    Twitter,
    LinkedIn: Linkedin,
    Instagram,
  };

  return (
    <footer className="bg-blue-50 text-blue-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BPxAI</h3>
            <p className="text-blue-700 mb-4">{content.companyDescription}</p>
            <div className="flex space-x-4">
              {content.socialLinks.map((social, index) => {
                const IconComponent =
                  socialIconMap[social.platform] || Facebook;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-700 mr-2" />
                <p className="text-blue-700">{content.contactInfo.email}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-700 mr-2" />
                <p className="text-blue-700">{content.contactInfo.phone}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-700 mr-2" />
                <p className="text-blue-700">{content.contactInfo.address}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-200 text-center text-blue-700">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
