import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Menu, X, Cpu, LogIn } from "lucide-react";
import { useCartStore } from "@/stores/cartStores";
import { ThemeToggle } from "./themeToggle";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "GPUs", path: "/products?category=GPU" },
  { label: "CPUs", path: "/products?category=CPU" },
  { label: "RAM", path: "/products?category=RAM" },
];

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname + location.search === path;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="sticky top-0 z-50 w-full border-b bg-[rgb(var(--background))/0.8] backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
          >
            <Cpu className="h-5 w-5" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight">
            PC<span className="text-[rgb(var(--primary))]">Parts</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[rgb(var(--primary))] ${
                isActive(link.path)
                  ? "text-[rgb(var(--primary))]"
                  : "text-[rgb(var(--muted-foreground))]"
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[rgb(var(--primary))]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          {/* Search */}
          <div className="relative hidden md:block w-56">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[rgb(var(--muted-foreground))]" />
            <input
              type="text"
              placeholder="Search parts..."
              className="w-full h-9 rounded-md border bg-transparent pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
            />
          </div>

          <ThemeToggle />

          {/* Cart */}
          <Link to="/cart">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[rgb(var(--accent))] transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </Link>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <Link to="/login">
              <button className="flex items-center gap-1.5 h-9 px-3 rounded-md text-sm font-medium hover:bg-[rgb(var(--accent))] transition-colors">
                <LogIn className="h-4 w-4" />
                Login
              </button>
            </Link>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-9 px-4 rounded-md bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] text-sm font-medium"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[rgb(var(--accent))] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t"
          >
            <nav className="container mx-auto flex flex-col gap-1 py-4 px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-[rgb(var(--accent))] ${
                      isActive(link.path)
                        ? "text-[rgb(var(--primary))] bg-[rgb(var(--accent))]"
                        : "text-[rgb(var(--muted-foreground))]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex gap-2 border-t pt-4">
                <Link
                  to="/login"
                  className="flex-1"
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="w-full h-9 rounded-md border hover:bg-[rgb(var(--accent))] transition-colors text-sm font-medium">
                    Login
                  </button>
                </Link>
                <Link
                  to="/signup"
                  className="flex-1"
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="w-full h-9 rounded-md bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] text-sm font-medium">
                    Sign Up
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
