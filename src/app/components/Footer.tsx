import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Safety', href: '/safety' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    'For Vendors': [
      { name: 'Vendor Portal', href: 'https://errandsorthub.errandsort.com/vendor/login/' },
    ],
    'For Service Providers': [
      { name: 'Drive with Us', href: 'https://errandsorthub.errandsort.com/provider/register/' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-white">ErrandSort</h3>
            <p className="mb-6 text-gray-400">
              Your trusted platform for shopping, selling, and delivering.
              Join thousands of satisfied users today.
            </p>

            <p className="mb-6 text-sm text-gray-400 italic">
              All our apps are available via Web App, Google Play Store, and App Store.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 font-semibold text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('http') ? (
                        <a href={link.href} className="transition-colors hover:text-emerald-500">
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.href} className="transition-colors hover:text-emerald-500">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © 2026 ErrandSort. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="transition-colors hover:text-emerald-500">
                Privacy Policy
              </Link>
              <a href="#" className="transition-colors hover:text-emerald-500">
                Terms of Service
              </a>
              <Link to="/cookies" className="transition-colors hover:text-emerald-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}