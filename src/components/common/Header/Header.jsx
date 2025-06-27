import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Internships & Jobs", path: "https://upnext-hub.vercel.app" },
    { name: "Contact", path: "/contactpage" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3 },
    }),
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const mobileItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 10 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with animation */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={hoverEffect}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <span className="text-white font-bold text-xl">UN</span>
              </div>
              <motion.span
                className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ scale: 1.05 }}
              >
                UpNextHub
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={hoverEffect}
              >
                <Link
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeLink === link.path
                      ? "text-purple-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {activeLink === link.path && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute left-3 right-3 bottom-0 h-0.5 bg-purple-600"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            custom={navLinks.length}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            {/* <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link> */}
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <motion.div key={link.path} variants={mobileItemVariants}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeLink === link.path
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={mobileItemVariants} className="pt-2">
              <Link
                to="/contact"
                className="block w-full px-4 py-2.5 text-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
