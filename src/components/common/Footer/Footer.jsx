import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/company/upnexthub",
    },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com/upnexthub" },
    { icon: <FaGithub size={20} />, url: "https://github.com/upnexthub" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com/upnexthub" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Intership & jobs", path: "https://upnext-hub.vercel.app" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contactpage" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center" },
        { name: "Tutorials" },
        { name: "Webinars" },
        { name: "Community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy" },
        { name: "Terms of Service" },
        { name: "Cookie Policy" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">UN</span>
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                UpNextHub
              </span>
            </div>
            <p className="mb-6">
              Empowering the next generation of tech talent through innovative
              opportunities and career growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{
                    y: -3,
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <HiMail
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:info@upnexthub.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    upnexthubtech@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <HiPhone
                  className="text-purple-400 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+11234567890"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 99226 70821 <br></br>
                  </a>
                  <a
                    href="tel:+11234567890"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 99235 24832
                  </a>
                  <br></br>
                  <a
                    href="tel:+11234567890"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 92264 09449
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            &copy; 2023 UpNextHub. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
