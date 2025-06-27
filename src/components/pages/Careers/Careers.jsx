// import { motion } from "framer-motion";
// import { useState } from "react";
// import Header from "../../common/Header/Header";
// import Footer from "../../common/Footer/Footer";
// import Contact from "../Contact/Contact";

// const Career = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const jobOpenings = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       type: "full-time",
//       location: "Remote",
//       department: "Engineering",
//       description:
//         "Build beautiful, responsive interfaces with React and Tailwind CSS.",
//       salary: "$90,000 - $120,000",
//     },
//     {
//       id: 2,
//       title: "UX Designer",
//       type: "full-time",
//       location: "San Francisco",
//       department: "Design",
//       description:
//         "Create intuitive user experiences that delight our customers.",
//       salary: "$85,000 - $110,000",
//     },
//     {
//       id: 3,
//       title: "Backend Engineer",
//       type: "full-time",
//       location: "Remote",
//       department: "Engineering",
//       description: "Develop scalable backend systems with Node.js and Python.",
//       salary: "$100,000 - $140,000",
//     },
//     {
//       id: 4,
//       title: "Marketing Intern",
//       type: "internship",
//       location: "New York",
//       department: "Marketing",
//       description:
//         "Learn digital marketing strategies in a fast-paced environment.",
//       salary: "$25/hr",
//     },
//     {
//       id: 5,
//       title: "Product Manager",
//       type: "full-time",
//       location: "Austin",
//       department: "Product",
//       description: "Lead product development from conception to launch.",
//       salary: "$110,000 - $150,000",
//     },
//     {
//       id: 6,
//       title: "DevOps Specialist",
//       type: "contract",
//       location: "Remote",
//       department: "Engineering",
//       description: "Implement CI/CD pipelines and cloud infrastructure.",
//       salary: "$70 - $90/hr",
//     },
//   ];

//   const filteredJobs =
//     activeTab === "all"
//       ? jobOpenings
//       : jobOpenings.filter((job) => job.type === activeTab);

//   return (
//     <>
//       <Header />
//       <Contact />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-36 px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="text-center mb-16"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
//             variants={fadeIn}
//           >
//             Join Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Team
//             </span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//             variants={fadeIn}
//           >
//             We're building the future together. Explore opportunities to grow
//             your career with us.
//           </motion.p>
//         </motion.div>

//         {/* Animated Tabs */}
//         <motion.div
//           className="flex justify-center mb-12"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           {[
//             { id: "all", label: "All Positions" },
//             { id: "full-time", label: "Full-Time" },
//             { id: "contract", label: "Contract" },
//             { id: "internship", label: "Internships" },
//           ].map((tab) => (
//             <motion.button
//               key={tab.id}
//               variants={fadeIn}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-6 py-3 mx-2 rounded-full font-medium transition-all duration-300 ${
//                 activeTab === tab.id
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {tab.label}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Job Listings */}
//         <motion.div
//           className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           {filteredJobs.map((job) => (
//             <motion.div
//               key={job.id}
//               variants={fadeIn}
//               className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
//                 hoveredCard === job.id ? "transform scale-105 shadow-xl" : ""
//               }`}
//               onMouseEnter={() => setHoveredCard(job.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               whileHover={{ y: -5 }}
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {job.title}
//                   </h3>
//                   <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
//                     {job.type.replace("-", " ")}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray-600 mb-2">
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   {job.location}
//                 </div>
//                 <div className="flex items-center text-gray-600 mb-4">
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                     />
//                   </svg>
//                   {job.department}
//                 </div>
//                 <p className="text-gray-600 mb-6">{job.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="font-bold text-gray-900">{job.salary}</span>
//                   <motion.button
//                     className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Apply Now
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Culture Section */}
//         <motion.div
//           className="mt-24 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="md:flex">
//             <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 text-white">
//               <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
//               <p className="text-lg mb-6 opacity-90">
//                 We believe in creating an environment where people can do their
//                 best work and grow both professionally and personally.
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "Competitive compensation",
//                   "Flexible work arrangements",
//                   "Professional development",
//                   "Health & wellness benefits",
//                   "Team retreats & events",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center">
//                     <svg
//                       className="w-5 h-5 mr-3"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="md:w-1/2 p-8 md:p-12">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Why Join Us?
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   {
//                     title: "Impactful Work",
//                     description:
//                       "Build products used by millions of people worldwide.",
//                   },
//                   {
//                     title: "Learning Culture",
//                     description:
//                       "We invest in your growth with training and mentorship.",
//                   },
//                   {
//                     title: "Diverse Team",
//                     description:
//                       "Collaborate with talented people from around the globe.",
//                   },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     className="border-l-4 border-indigo-500 pl-4"
//                   >
//                     <h4 className="font-bold text-gray-900 text-lg">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-600">{item.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="mt-24 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Don't See Your Dream Job?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             We're always looking for talented people. Send us your resume and
//             we'll contact you when a matching position opens.
//           </p>
//           <motion.button
//             className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Submit Your Resume
//           </motion.button>
//         </motion.div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Career;
