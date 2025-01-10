import { backend, cp, docker, frontend, kafka, redis, networkin } from '../assets';
import { python, django, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, typescript, cpp, c, java, ruby, bash, solidity, github, nextjs, redux, socket, rails, mysql, postgresql, cockroach, kubernetes, graphql, elasticsearch, prometheus, keycloak, fastapi, devquest} from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1vIXPC61bjvkpRAfCIXUHqsdDEWOO56qp/preview";

export const aboutMe = "Hello, I am Puneet, a passionate Software Engineer with over two years of experience in full-stack development. I specialize in building scalable enterprise platforms and have expertise in a wide range of technologies, including Ruby, JavaScript, C++, Java, and Python, as well as frameworks like React.js, Next.js, Django, and Ruby on Rails.\nCurrently pursuing my Master's in Software Engineering at San Jose State University, I am always eager to stay at the forefront of technology. Whether tackling complex scalability challenges, working with cloud technologies, or collaborating with cross-functional teams, I thrive in environments where I can apply my technical expertise while continuously learning and growing.\nLet us connect and explore opportunities to collaborate on innovative, impactful projects!"

export const skills = [ 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
    {title: "Blockchain Developer", icon: cp}
    // {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Next.js', icon: nextjs, invert: false },
    {title: 'Redux', icon: redux, invert: false },
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'Ruby on Rails', icon: rails, invert: false },
    {title: 'Tailwind', icon: tailwind, invert: false }, 
    {title: 'Django', icon: django, invert: true }, 
    {title: 'FastAPI', icon: fastapi, invert: false },
    {title: 'Socket.io', icon: socket, invert: false },
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'C++', icon: cpp, invert: false },
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false },
    {title: 'Ruby', icon: ruby, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'Python', icon: python, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Bash', icon: bash, invert: false },
    {title: 'Solidity', icon: solidity, invert: false }
];

export const databases = [
    {title: 'MongoDB', icon: mongodb, invert: false },
    {title: 'Redis', icon: redis, invert: false },
    {title: 'MySQL', icon: mysql, invert: false },
    {title: 'PostgreSQL', icon: postgresql, invert: false },
    {title: 'CockroachDB', icon: cockroach, invert: false }
    // {title: 'SQL', icon: sql, invert: true }
]

export const tools = [
    {title: 'Docker', icon: docker, invert: false },
    {title: 'Kafka', icon: kafka, invert: true },
    {title: 'Kubernetes', icon: kubernetes, invert: false },
    {title: 'GraphQL', icon: graphql, invert: false },
    {title: 'Elastic Stack', icon: elasticsearch, invert: false },
    {title: 'Prometheus', icon: prometheus, invert: false },
    {title: 'Keycloak', icon: keycloak, invert: false },
    {title: 'Git', icon: git, invert: false },
    {title: 'GitHub', icon: github, invert: false }
]

export const websites = []

export const projects = [
    {
        title: "Network-IN: Social Networking Platform for freelancers",
        description: "Network-IN is a comprehensive blockchain-integrated social networking platform designed specifically for freelancers and clients. The platform combines traditional social networking features with innovative smart contract functionality to create a secure and efficient marketplace for freelance services. By leveraging blockchain technology and decentralized storage solutions, it ensures transparent transactions and secure content management while fostering a collaborative professional community.",
        stack: [javascript, nextjs, solidity, socket, nodejs],
        source: "https://github.com/pb2323/Social_Media_App",
        media: networkin,
        bulletPoints: []
    },
    {
        title: "DevQuest.IO: Coding Progress Tracker",
        description: "DevQuest.IO is a comprehensive web-based platform designed to streamline the coding journey for aspiring developers. The project addresses the challenge of managing progress across multiple coding platforms by providing a unified dashboard that aggregates coding statistics, offers personalized recommendations, and enables collaborative learning. Built with a robust microservices architecture, the platform incorporates advanced technologies and design patterns to ensure scalability, efficiency, and seamless user experience.",
        stack: [python, typescript, nextjs, socket, redis, mongodb, kafka, elasticsearch, prometheus, keycloak, kubernetes, docker, graphql, fastapi],
        source: "https://github.com/DevQuestIO",
        media: devquest,
        bulletPoints: []
    }

]