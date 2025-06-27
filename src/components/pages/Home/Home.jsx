import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <>
      <Header />
      <Contact />
      <div className="scroll-smooth">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"
          />

          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Our World
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
            >
              Discover amazing experiences that will transform your digital
              journey
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Link to="/contactpage">
                <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Amazing Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our cutting-edge solutions designed to empower your
                business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Powered",
                  description:
                    "Leverage artificial intelligence to automate your workflows",
                  icon: "🤖",
                },
                {
                  title: "Real-time Analytics",
                  description:
                    "Get instant insights with our powerful analytics dashboard",
                  icon: "📊",
                },
                {
                  title: "Secure Cloud",
                  description:
                    "Enterprise-grade security for your peace of mind",
                  icon: "🔒",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <motion.div
            style={{ y: textY }}
            className="relative z-10 text-center px-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business Digital
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join thousands of companies revolutionizing their industry with
              our platform
            </p>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                customers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "Paras Factor",
                  quote:
                    "This platform transformed our operations. Our productivity increased by 100% in just 3 months! We used it to create a modern and fully responsive portfolio website that impressed our clients. We eventually wrapped the project after achieving our design goals.",
                  avatar: "👨‍💻",
                },
                {
                  id: 2,
                  name: "Mayuri Mehta",
                  quote:
                    "The best decision we made was switching to this solution. The support team is exceptional. We used it for building our online sales product showcase and it helped us reach more customers effectively.",
                  avatar: "👩‍💼",
                },
                {
                  id: 3,
                  name: "Aishwarya Suryawanshi",
                  quote:
                    "We've seen a 150% ROI since implementing their tools. Absolutely game-changing. We developed an engaging educational website using their service, which now supports hundreds of learners daily.",
                  avatar: "👩‍🎨",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "70+", label: "Happy Customers" },
                { number: "95%", label: "Retention Rate" },
                { number: "24/7", label: "Support Available" },
                { number: "1", label: "Global Offices" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of businesses already growing with our platform
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contactpage">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                    >
                      Get Started Free
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
                    >
                      Schedule Demo
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
