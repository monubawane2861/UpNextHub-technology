import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Contact from "../Contact/Contact";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Custom, responsive websites built with modern technologies to ensure performance and scalability.",
      icon: "💻",
      features: [
        "React/Next.js",
        "Tailwind CSS",
        "Node.js Backends",
        "API Integration",
      ],
      color: "from-purple-400 to-indigo-500",
      textColor: "text-indigo-600",
    },
    {
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications that provide native-like experiences on iOS and Android.",
      icon: "📱",
      features: [
        "React Native",
        "Flutter",
        "Performance Optimization",
        "App Store Deployment",
      ],
      color: "from-blue-400 to-cyan-400",
      textColor: "text-blue-600",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with user experience as the top priority.",
      icon: "🎨",
      features: [
        "Figma/Sketch",
        "User Research",
        "Prototyping",
        "Design Systems",
      ],
      color: "from-pink-400 to-rose-400",
      textColor: "text-pink-600",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and serverless architectures for modern applications.",
      icon: "☁️",
      features: ["AWS/Azure", "Serverless", "Microservices", "CI/CD Pipelines"],
      color: "from-amber-400 to-orange-400",
      textColor: "text-amber-600",
    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with powerful visualization and analysis tools.",
      icon: "📊",
      features: [
        "Python/R",
        "Machine Learning",
        "Dashboard Creation",
        "Big Data Processing",
      ],
      color: "from-emerald-400 to-teal-500",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <>
      <Header />
      <Contact />
      <div className="min-h-screen  bg-gray-50 text-gray-800  px-4 py-36 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We deliver cutting-edge solutions tailored to your business needs
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {service.icon} {service.title}
              </button>
            ))}
          </motion.div>

          {/* Main Content Area */}
          <div className="relative h-96 md:h-[32rem] mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${services[activeTab].color} rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-9xl mb-6"
                  >
                    {services[activeTab].icon}
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-xl mb-6 text-white text-opacity-90">
                    {services[activeTab].description}
                  </p>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-opacity-90 transition-all">
                    Learn More →
                  </button>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-4">
                    {services[activeTab].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm text-black"
                      >
                        <span className="mr-3 text-2xl">✓</span>
                        <span className="text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-cyan-400 transition-all shadow-sm hover:shadow-md"
              >
                <motion.p
                  className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Their web development team delivered beyond our expectations. The site performance is incredible!",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                },
                {
                  quote:
                    "The mobile app they built for us has significantly increased our customer engagement.",
                  author: "Michael Chen",
                  role: "Product Manager, RetailGo",
                },
                {
                  quote:
                    "Excellent UI/UX design work that perfectly captured our brand identity.",
                  author: "Emma Rodriguez",
                  role: "Marketing Director, StyleHub",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-lg italic mb-6 text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white text-opacity-90">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
                Get a Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition-all">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
