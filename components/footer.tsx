import { siteConfig } from "@/config/config";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {siteConfig.company.name}
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {siteConfig.company.description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-500">
            <p>© 2024 {siteConfig.company.name}. All rights reserved.</p>
            <p>{siteConfig.company.contact.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
