import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthRoleModal } from "./AuthRoleModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const navLinks = [
    { name: "For Customers", href: "/customer" },
    { name: "For Vendors", href: "/vendor" },
    { name: "For Service Providers", href: "/provider" },
    { name: "Errands", href: "/errands" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-fit py-3 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-gray-900"
            >
              <img
                src="/logo-black-text.svg"
                alt="ErrandSort Logo"
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 transition-colors hover:text-emerald-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => openAuthModal("login")}
              className="text-gray-700 transition-colors hover:text-emerald-500"
            >
              Sign In
            </button>
            <button
              onClick={() => openAuthModal("signup")}
              className="rounded-lg bg-emerald-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAuthModal("login");
                }}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAuthModal("signup");
                }}
                className="w-full rounded-lg bg-emerald-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      <AuthRoleModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </nav>
  );
}
