import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomeData from "./Home.json";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Helmet>
        <meta name="description" content={HomeData.meta.description} />
        <meta name="keywords" content={HomeData.meta.keywords} />
        <meta property="og:title" content={HomeData.meta.ogTitle} />
        <meta property="og:description" content={HomeData.meta.ogDescription} />
      </Helmet>

      <Header />
      <Contact />

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
              {HomeData.hero.highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            {HomeData.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center">
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
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
              Comprehensive services to establish and grow your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HomeData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
            {HomeData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  ⭐️⭐️⭐️⭐️⭐️
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {HomeData.stats.map((stat, index) => (
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
              {HomeData.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {HomeData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contactpage">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                  {HomeData.cta.button1}
                </button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  {HomeData.cta.button2}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
