import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import image1 from "../assets/Ahmed_image.png";
import image2 from "../assets/Ahmedwork.png";
import giki from "../assets/projects/Giki.png";


export const HERO_CONTENT = `I am a passionate software engineer specializing in full-stack and system-level development, with hands-on experience in building scalable applications and security solutions. Over the past year, I have contributed to enterprise-grade products, working across front-end (React, TypeScript), back-end (Django, Node.js, Flask), databases (MySQL, PostgreSQL, MongoDB), and system-level components (Python, C/C++). My goal is to leverage my expertise in both web technologies and secure networking systems to deliver innovative solutions that are robust, efficient, and impactful.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a strong foundation in full-stack development and system-level programming. With professional experience at Ebryx, I have worked on core components of a Zero Trust Network Access (ZTNA) security solution, optimizing scalability and reliability for thousands of clients. On the web side, I have developed and deployed production-grade applications using React, TypeScript, Django, and AWS serverless architectures. I thrive in collaborative environments, enjoy solving complex technical challenges, and continuously push myself to learn and adapt. Outside of coding, I enjoy staying active, experimenting with new technologies, and contributing to impactful projects.`;  

export const EXPERIENCES = [
  {
    year: "Sep-2024 - Present",
    role: "Associate Software Engineer",
    company: "Ebryx",
    description: `Worked as a core team member on Invisily (ZTNA security product), maintaining and developing three core components: Controller (Python), Gateway (C++), and Sniffer (C). Implemented multi-tenancy and enterprise security policies (DLP, internet access). Optimized system scalability, boosting controller capacity from 1K → 10K+ clients and improving throughput from 10 → 200 logins/sec. Resolved gateway/database bottlenecks and ensured reliable client sessions by optimizing DB operations and analyzing packets with Wireshark/tshark.`,
    technologies: ["Python", "C++", "C", "MySQL", "Wireshark", "Tshark", "Networking","SQL"],
    delay: 0.3
  },
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
    technologies: ["Leadership", "Event Management", "Communication skills"],
    delay: 0.9
  }
];

export const PROJECTS = [
  {
    title: "CoterGlobal Careers Portal & Website",
    image: project7,
    description:
      "Developed and deployed the corporate website and a Careers portal on AWS serverless architecture. Implemented job search, job details, and email APIs with Django + MongoDB backend, integrated with a React + TypeScript frontend.",
    technologies: ["React", "TypeScript", "Django", "MongoDB", "AWS Serverless"],
    delay: 0.3,
    link: "https://coterglobal.com/"
  },
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
    image: project2,
    description:
      "An application the detection of Skin cancer mainly manalona with in few secs. This app needs a dermoscopic image of the tumor of malanoma and it classify the image in malignant or benign based on the info image have.",
    technologies: ["HTML", "CSS", "React", "Flask", "Densenet-210", "Numpy", "Tensorflow"],
    delay: 0.7,
    link: "https://github.com/MUHAMMAD-AHMED-CS/Skin-cancer-detection"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind-CSS", "React", "Framer motion"],
    delay: 0.9,
    link:"https://github.com/MUHAMMAD-AHMED-CS/My_portfolio"
  },
  {
    title: "Walmart Sales predection",
    image: project4,
    description:
      "This project is a web application for predicting Walmart sales & checking inventory. It provides a user interface for predicting weekly sales and checking inventory levels based on user input Users can input their email address to receive predictions and inventory data via email.",
    technologies: ["HTML","CSS" ,"JavaScript","Flask","Machine learning"],
    delay: 1.2,
    link:"https://github.com/MUHAMMAD-AHMED-CS/Walmart-Sales-prediction-project"
  },
  {
    title: "Graph processing",
    image: project5,
    description:
      "Display the adjacency list of the graph. Find and display the Minimum spanning tree (Prims Algoritm). Find and display the shortest path from a source node to a target node (Dijkstra's Algorithm). Count the total number of nodes. Display the node with the minimum and maximum edges.",
    technologies: ["C++","SDL2"],
    delay: 1.2,
    link:"https://github.com/MUHAMMAD-AHMED-CS/Graph-Processing"
  },
  {
    title: "2D Animation Game (Attari breakout)",
    image: project6,
    description:
      "Attari breakout game developed using principles of object oriented programming. A 2D animation game. Animations handled with the help of external library SDL2. ",
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
      "I earned my Bachelor of Science in Bachelor's in Computer Engineering, where I developed a strong foundation in programming in C++, OOP, Data structures and Algorithm, and design principles. My studies included Object Oriented Programming in C++, Data Structures and algorithms, Databases, Software Engineering, Advance OOP analysis, Introduction to AI, Machine learning, Deep neural networks and DEVOPS which sparked my interest in Software Engineering.",
    skills: ["OOP", "DSA", "Problem Sloving", "Database", "DEVOPS"],
    delay: 0.5
  };

export const CONTACT = {
  address: "B-Block Phase-1 Johar Town , Lahore | LH 54782 ",
  phoneNo: "+92 300 6999058",
  email: "muhammed091ahmed@gmail.com",
};

export const IMAGES = {
  img1: image1,
  img2: image2
};


