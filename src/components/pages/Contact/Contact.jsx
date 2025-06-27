import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import { IoClose } from "react-icons/io5"; // Close Icon
import { BsFillChatRightDotsFill } from "react-icons/bs"; // Chat Icon

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatButtonPulsing, setIsChatButtonPulsing] = useState(false);
  const phoneNumber = "+919922670821";
  const message = "Hello! I have a question.";
  const pulseIntervalRef = useRef(null);

  useEffect(() => {
    // Pulse animation every 20 seconds
    pulseIntervalRef.current = setInterval(() => {
      setIsChatButtonPulsing(true);
      setTimeout(() => setIsChatButtonPulsing(false), 1000);
    }, 20000);

    return () => clearInterval(pulseIntervalRef.current);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setIsOpen(false);
  };

  // Chat Window Component
  const ChatWindow = ({ onClose, handleWhatsAppClick }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className="bg-white rounded-xl shadow-2xl overflow-hidden w-72"
    >
      <div className="bg-green-500 p-4 text-white">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-1 rounded-full">
            <BsFillChatRightDotsFill size={24} color="#4CAF50" />
          </div>
          <h3 className="font-bold text-lg">Chat with us</h3>
        </div>
        <p className="text-xs mt-1 opacity-90">
          We're here to help you with any questions!
        </p>
      </div>

      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4">
          Click below to start a conversation on WhatsApp. We typically reply
          within minutes.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
        >
          <FaWhatsapp size={20} color="white" />
          <span>Open WhatsApp</span>
        </motion.button>
      </div>

      <div className="border-t border-gray-200 p-2 bg-gray-50 flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-sm"
          aria-label="Close chat window"
        >
          <IoClose size={20} className="mr-1 inline-block" />
          Close
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            onClose={toggleChat}
            handleWhatsAppClick={handleWhatsAppClick}
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        aria-label="Open WhatsApp chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative bg-green-500 w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
          isChatButtonPulsing ? "animate-pulse" : ""
        }`}
      >
        <FaWhatsapp size={30} color="white" />

        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            1
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default Contact;
