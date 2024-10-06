import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import giki from "../assets/projects/Giki.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With one year of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, Flask MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "July-2024 - Sep-2024",
    role: "Embedded Software Engineer",
    company: "Software Motion.",
    description: `Developed and optimized scripts for running SWCs on MDC board, Enhancing system performance. Simplified testing processes, reducing execution time for SWCs by implementing streamlined script commands. Researched and implemented optimal management methods for large repositories, ensuring efficient version control.`,
    technologies: ["C++", "Bash Scripting", "Python", "Git"],
    delay: 0.5
  },
  {
    year: "July-2023 - Aug-2023",
    role: "Software Engineer Intern",
    company: "Augment Scale (previously Onebyte)",
    description: `Collaborated with a team to develop a therapy chatbot website, focusing on using React, Node.js, Firebase, Fiestore and Pinecone. Integrated Firebase for real-time database, ensuring secure user authentication and data management. Integerated Pinecone for Tracking user chatlog for personalized user experience . Gained hands-on experience in collaborative web development, enhancing problem-solving and teamwork skills.`,
    technologies: ["HTML", "CSS", "React.js","Node.js" ,"Firebase", "Pinecone"],
    delay: 0.7
  },
  {
    year: "May-2023 - May-2024",
    role: "Event Coordinator",
    company: "Institution Of Engineering and Technology on Campus-GIKI",
    description: `Coordinated a national event Giki Innovation Summit (GIS) national event and led team of 80+ students. Registered 100+ students, facilitated through liaison drives and promotional activities. Secured 200,000 PKR sponsorship, initiating dialogues with multiple companies. Increased Social media visibility and engagement upto 150%.`,
    technologies: ["Leadership", "Event Management", "Communication skills", "Postgres"],
    delay: 0.9
  }
];

export const PROJECTS = [
  {
    title: "PsychPilot (Therapy-chatbot)",
    image: project1,
    description:
      "A fully functional Therapy chatbot website with features like personalized chats, showing previous chatlogs, and user authentication and authorization.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Firebase", "Firestore", "Pinecone"],
    delay: 0.5,
    link:"https://github.com/MUHAMMAD-AHMED-CS/chatbot-frontend"
  },
  {
    title: "Skin cancer Detection website",
    image: project3,
    description:
      "An application the detection of Skin cancer mainly manalona with in few secs. This app needs a dermoscopic image of the tumor of malanoma and it classify the image in malignant or benign based on the info image have.",
    technologies: ["HTML", "CSS", "React", "Flask", "Densenet-210", "Numpy", "Tensorflow"],
    delay: 0.7,
    link: "https://github.com/MUHAMMAD-AHMED-CS/Skin-cancer-detection"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind-CSS", "React", "Framer motion"],
    delay: 0.9,
    link:"https://github.com/MUHAMMAD-AHMED-CS/My_portfolio"
  },
  {
    title: "Walmart Sales predection",
    image: project6,
    description:
      "This project is a web application for predicting Walmart sales & checking inventory. It provides a user interface for predicting weekly sales and checking inventory levels based on user input Users can input their email address to receive predictions and inventory data via email.",
    technologies: ["HTML","CSS" ,"JavaScript","Flask","Machine learning"],
    delay: 1.2,
    link:"https://github.com/MUHAMMAD-AHMED-CS/Walmart-Sales-prediction-project"
  },
  {
    title: "Graph processing",
    image: project4,
    description:
      "Display the adjacency list of the graph. Find and display the Minimum spanning tree (Prims Algoritm). Find and display the shortest path from a source node to a target node (Dijkstra's Algorithm). Count the total number of nodes. Display the node with the minimum and maximum edges.",
    technologies: ["C++","SDL2"],
    delay: 1.2,
    link:"https://github.com/MUHAMMAD-AHMED-CS/Graph-Processing"
  },
  {
    title: "2D Animation Game (Attari breakout)",
    image: project5,
    description:
      "Display the adjacency list of the graph. Find and display the Minimum spanning tree (Prims Algoritm). Find and display the shortest path from a source node to a target node (Dijkstra's Algorithm). Count the total number of nodes. Display the node with the minimum and maximum edges.",
    technologies: ["C++","SDL2"],
    delay: 1.2,
    link:""
  },
];

export const EDUCATION = 
  {
    title: "Bachelor's in Computer Engineering",
    year: "Aug-2020 - June-2024",
    institute: "Ghulam Ishaq Khan Institute Of engineering and Technology",
    image: giki,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication",
    skills: ["OOP", "DSA", "Problem Sloving", "Database"],
    delay: 0.5
  };

export const CONTACT = {
  address: "B-Block Phase-1 Johar Town , Lahore | LH 54782 ",
  phoneNo: "+92 300 6999058",
  email: "muhammed091ahmed@gmail.com",
};


