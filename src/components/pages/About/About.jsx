import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaAward,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { FiUsers, FiClock, FiTrendingUp } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import teamMembers from "./teamData";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const About = () => {
  // Company milestones timeline
  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "Started in a small office with just 3 team members focused on web development",
      icon: <FaRocket className="text-blue-500" size={20} />,
    },
    {
      year: "2024",
      title: "First Major Client",
      description:
        "Landed our first enterprise client, marking our entry into corporate solutions",
      icon: <FaHandshake className="text-purple-500" size={20} />,
    },
    {
      year: "2025",
      title: "Expanded Services",
      description:
        "Added mobile app development and cloud solutions to our offerings",
      icon: <GiProgression className="text-green-500" size={20} />,
    },
  ];

  const stats = [
    {
      value: "70+",
      label: "Projects Completed",
      icon: <FaCode className="text-blue-500" size={24} />,
    },
    {
      value: "10+",
      label: "Clients Worldwide",
      icon: <FiUsers className="text-purple-500" size={24} />,
    },
    {
      value: "100%",
      label: "Mobile Responsive",
      icon: <FaMobileAlt className="text-green-500" size={24} />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <FaServer className="text-orange-500" size={24} />,
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      icon: <FiClock className="text-red-500" size={24} />,
    },
    {
      value: "3x",
      label: "Growth Yearly",
      icon: <FiTrendingUp className="text-yellow-500" size={24} />,
    },
  ];

  const services = [
    {
      title: "Custom Web Development",
      description:
        "Tailored solutions built with React, Next.js, and modern frameworks for optimal performance and scalability.",
      icon: <FaCode size={32} className="text-blue-500" />,
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps using React Native and Flutter that deliver native-like experiences.",
      icon: <FaMobileAlt size={32} className="text-purple-500" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "AWS, Azure, and Google Cloud implementations with CI/CD pipelines and automated scaling.",
      icon: <FaServer size={32} className="text-green-500" />,
    },
    {
      title: "Data Analytics",
      description:
        "Business intelligence dashboards and predictive analytics powered by AI and machine learning.",
      icon: <FaChartLine size={32} className="text-orange-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality for maximum engagement.",
      icon: <FaLightbulb size={32} className="text-yellow-500" />,
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive security audits and implementation of enterprise-grade protection measures.",
      icon: <FaShieldAlt size={32} className="text-red-500" />,
    },
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "🟢" },
    { name: "TypeScript", logo: "🔷" },
    { name: "GraphQL", logo: "📊" },
    { name: "AWS", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Python", logo: "🐍" },
    { name: "MongoDB", logo: "🍃" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <Contact />
      <div className="min-h-screen bg-gray-50 ">
        {/* Hero Section */}
        <section className="relative py-36 bg-gradient-to-r  from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern"></div>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                About <span className="text-yellow-300">UpNextHub</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
                variants={itemVariants}
              >
                Pioneering digital transformation since 2023 with innovative
                solutions
              </motion.p>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link to="/services">
                  <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                    Explore Our Work
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated floating elements */}
          <motion.div
            className="absolute top-20 left-1/4 text-4xl opacity-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            💻
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-1/4 text-5xl opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            🌐
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.h2
                  className="text-3xl font-bold mb-6 text-gray-800"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Our Story
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Founded in 2023, UpNextHub began as a small team of passionate
                  developers with a vision to create web applications that truly
                  make a difference. What started as a garage operation has now
                  grown into a full-service digital agency serving clients
                  across the globe.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  We specialize in crafting responsive, accessible, and
                  performant web applications that work seamlessly across all
                  devices. Our mission is to bridge the gap between innovative
                  ideas and technological execution through cutting-edge
                  solutions.
                </motion.p>
              </div>
              <motion.div
                className="relative h-80 bg-gray-100 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-8xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
                  variants={itemVariants}
                  whileHover={cardHover}
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <motion.p
                    className="text-4xl font-bold text-gray-800 mb-2"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven process that delivers exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  We begin by deeply understanding your business objectives,
                  target audience, and technical requirements through workshops
                  and research.
                </p>
              </motion.div>

              <motion.div
                className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Design
                </h3>
                <p className="text-gray-600">
                  Our UX/UI team creates wireframes and prototypes, ensuring the
                  solution is both beautiful and intuitive before development
                  begins.
                </p>
              </motion.div>

              <motion.div
                className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Development
                </h3>
                <p className="text-gray-600">
                  Using agile methodologies, we build in sprints with regular
                  demos and iterations based on your feedback.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                  variants={itemVariants}
                  whileHover={cardHover}
                >
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern tools and frameworks we work with
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <span className="text-4xl mb-3">{tech.logo}</span>
                  <span className="font-medium text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key milestones in our company's growth
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div
                      className={`md:w-1/2 p-6 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-4"
                        whileHover={{ scale: 1.1 }}
                      >
                        {milestone.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* teaam section */}
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate people behind UpNextHub's success
              </p>
            </motion.div>

            {/* Centering the entire grid using flexbox */}
            <div className="flex justify-center">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 mb-4">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-3">
                        {member.socialLinks?.map((social, i) => (
                          <a
                            key={i}
                            href={social.url}
                            className="text-gray-500 hover:text-blue-500 transition-colors"
                            aria-label={social.name}
                            target="_blank" // Add target="_blank" for security
                            rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        {/* Client Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by innovative companies worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={cardHover}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-6">
                  "UpNextHub transformed our digital presence completely. Their
                  team delivered beyond our expectations with innovative
                  solutions that drove a 150% increase in user engagement."
                </p>
                <div className="flex items-center">
                  {/* <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-bold text-gray-800">Sonali Sharma</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={cardHover}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-6">
                  "The mobile app developed by UpNextHub exceeded all our
                  performance benchmarks. Their attention to detail and user
                  experience design is unparalleled in the industry."
                </p>
                <div className="flex items-center">
                  {/* <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-bold text-gray-800">Rahul Meshram</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={cardHover}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-6">
                  "Working with UpNextHub was a game-changer for our startup.
                  They not only built our platform but became true partners in
                  our growth journey, offering strategic technical advice."
                </p>
                <div className="flex items-center">
                  {/* <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Emma Rodriguez"
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <h4 className="font-bold text-gray-800">Prit thakre</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss how we can help bring your digital vision to life
                with our expert team and proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contactpage">
                  {" "}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent border-2 border-white font-bold rounded-full shadow-lg"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
