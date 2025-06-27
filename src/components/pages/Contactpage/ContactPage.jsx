import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import Contact from "../Contact/Contact";
import emailjs from "@emailjs/browser";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import clsx from "clsx";

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, color: "blue-400", url: "#" },
  { name: "GitHub", icon: FaGithub, color: "gray-700", url: "#" },
  { name: "LinkedIn", icon: FaLinkedin, color: "blue-600", url: "#" },
  { name: "Instagram", icon: FaInstagram, color: "pink-500", url: "#" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    emailjs.init("YOUR_EMAILJS_USER_ID");
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "monubawane21@gmail.com",
      })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        setError("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919922670821";
    const message = `Hello , I want to connect with you.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    const mailto = `mailto:upnexthubtech@gmail.com?subject=Connect&body=Hello UpnextHub, I want to connect with you.`;
    window.open(mailto, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <Header />
      <Contact />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-36 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Fill out the form or
              connect with me directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Info Cards */}
              {/* Email Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600">upnexthubtech@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <FaWhatsapp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">+91 99226 70821</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I’ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={clsx(
                        "w-full py-3 px-4 rounded-lg font-medium text-white flex justify-center",
                        isLoading
                          ? "bg-blue-400"
                          : "bg-blue-600 hover:bg-blue-700"
                      )}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>

                    {/* WhatsApp & Email Quick Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 flex justify-center items-center"
                      >
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={handleEmailClick}
                        className="py-3 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 flex justify-center items-center"
                      >
                        <FaEnvelope className="mr-2" />
                        Email
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Connect with me on social media
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-3 bg-${social.color}/10 hover:bg-${social.color}/20 rounded-full transition duration-200`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
