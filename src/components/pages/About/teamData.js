import Image1 from "../../../assets/image/akash.jpg";
import Image2 from "../../../assets/image/tushar.jpg";
import Image3 from "../../../assets/image/monaa.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Akash Gaydhane",
    role: "CEO ,Developer",
    bio: "Tech visionary with a proven track record in web development and driving digital transformatio",
    image: Image1, // Directly use the imported image
    social: {
      linkedin: "https://linkedin.com/in/rahul-upnexthub",
      twitter: "https://twitter.com/rahul-upnexthub",
    },
    skills: ["Leadership", "Node.js", "frontend & backend development "],
  },
  {
    id: 2,
    name: "Tushar Maske ",
    role: "sales executive , Developer",
    bio: "Full-stack expert specializing in scalable architecture and cloud solutions",
    image: Image2, // Directly use the imported image
    social: {
      linkedin: "https://linkedin.com/in/priya-upnexthub",
      github: "https://github.com/priya-upnexthub",
    },
    skills: ["Node.js", "AWS", "React"],
  },
  {
    id: 3,
    name: "Monali Bawane",
    role: "CO founder, Developer",
    bio: "UI/UX specialist focused on creating intuitive user experiences",
    image: Image3, // Directly use the imported image
    social: {
      behance: "https://behance.net/amit-upnexthub",
      dribbble: "https://dribbble.com/amit-upnexthub",
    },
    skills: ["UI/UX Design", "frontend development", "Figma"],
  },
];

export default teamMembers;
