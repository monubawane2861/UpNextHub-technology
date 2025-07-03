import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta
          name="description"
          content="UpNextHub offers professional web development, mobile apps, and digital marketing services to transform your business."
        />
        <meta
          name="keywords"
          content="web development, mobile apps, digital marketing, SEO, social media marketing"
        />
        <meta
          property="og:title"
          content="UpNextHub Technology | Digital Solutions Provider"
        />
        <meta
          property="og:description"
          content="Professional digital solutions including web development, mobile apps, and marketing services."
        />
      </Helmet>

      <Header />
      <Contact />
      <div className="scroll-smooth">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Upnexthub Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
              Professional web and mobile app development services with
              comprehensive digital marketing solutions
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/contact" aria-label="Contact UpNextHub">
                <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
              <Link to="/about" aria-label="Learn about UpNextHub">
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive services to establish and grow your online
                presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description:
                    "Custom websites and web applications built with modern technologies",
                  icon: "🌐",
                },
                {
                  title: "Mobile Applications",
                  description:
                    "iOS and Android apps to engage your customers on any device",
                  icon: "📱",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Strategies to increase your online visibility and conversions",
                  icon: "📈",
                },
                {
                  title: "SEO Services",
                  description:
                    "Optimize your website to rank higher on search engines",
                  icon: "🔍",
                },
                {
                  title: "Social Media Marketing",
                  description:
                    "Professional management of your social media presence",
                  icon: "💬",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Secure and scalable hosting for your digital assets",
                  icon: "☁️",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="text-5xl mb-6" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    itemProp="name"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" itemProp="description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Results-driven solutions that deliver measurable impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "Paras Factor",
                  quote:
                    "UpNextHub transformed our online presence with a modern, responsive website that increased our leads by 150%.",
                  role: "CEO, Factor Enterprises",
                },
                {
                  id: 2,
                  name: "Mayuri Mehta",
                  quote:
                    "Their SEO strategy took us from page 3 to the top of Google search results in just 3 months.",
                  role: "Marketing Director, Mehta Solutions",
                },
                {
                  id: 3,
                  name: "Aishwarya Suryawanshi",
                  quote:
                    "The mobile app they developed has increased our customer engagement by 200% year-over-year.",
                  role: "Product Manager, Surya Tech",
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>
                  <p
                    className="text-gray-600 italic mb-6"
                    itemProp="reviewBody"
                  >
                    "{testimonial.quote}"
                  </p>
                  <div
                    itemScope
                    itemType="https://schema.org/Person"
                    itemProp="author"
                  >
                    <h4 className="font-bold text-gray-900" itemProp="name">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500" itemProp="jobTitle">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "70+", label: "Projects Completed" },
                { number: "95%", label: "Client Retention" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "Satisfied Clients" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get started with our professional digital solutions today
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" aria-label="Contact UpNextHub">
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                    Get Started Free
                  </button>
                </Link>
                <Link to="/about" aria-label="Learn about UpNextHub services">
                  <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
                    Schedule Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
