import { backend, binaryTrees, cp, docker, dsakit, frontend, kafka, leethub, linkedList, redis, networkin } from '../assets';
import { python, sql, django, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, typescript, cpp, c, java, ruby, bash, solidity, github, nextjs, redux, socket, rails, mysql, postgresql, cockroach, kubernetes, graphql, elasticsearch} from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1MOtaftXt9wRZ0fc6tGXD6sybETJYIGvM/preview";

export const aboutMe = "Hello, I am Puneet, a passionate Software Engineer with over two years of experience in full-stack development. I specialize in building scalable enterprise platforms and have expertise in a wide range of technologies, including Ruby, JavaScript, C++, Java, and Python, as well as frameworks like React.js, Next.js, Django, and Ruby on Rails.\nCurrently pursuing my Master's in Software Engineering at San Jose State University, I am always eager to stay at the forefront of technology. Whether tackling complex scalability challenges, working with cloud technologies, or collaborating with cross-functional teams, I thrive in environments where I can apply my technical expertise while continuously learning and growing.\nAt BrowserStack, I engineered critical solutions to secure significant enterprise deals, including a $1.3 million contract. I also took on multiple on-call responsibilities, resolving 98% of alert breaches within the threshold. My hands-on experience with real-world customer issues has sharpened my problem-solving skills and given me the empathy needed to resolve challenges end to end, fostering strong customer relationships.\nLet us connect and explore opportunities to collaborate on innovative, impactful projects!"

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
    {title: 'Socket.io', icon: socket, invert: false },
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'C++', icon: cpp, invert: false },
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'Ruby', icon: ruby, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'Python', icon: python, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false },
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
    {title: 'Elasticsearch', icon: elasticsearch, invert: false },
    {title: 'Git', icon: git, invert: false },
    {title: 'GitHub', icon: github, invert: false }
]

export const websites = []

export const projects = [
    {
        title: "Network-IN: Social Networking Platform for freelancers",
        description: "Network-IN is a social networking platform designed for freelancers, enabling secure and transparent interactions between clients and freelancers. The platform allows users to post pictures and statuses, like and comment on content, and follow others to see their updates. Content is securely stored using IPFS, while users can engage in real-time messaging, audio/video calls and receive notifications of profile activities. \nA standout feature is the smart contract system, which ensures secure payments. Clients stake the project fee, and freelancers stake half of that amount as a guarantee until project completion, with both parties protected through blockchain-based transactions. The platform currently supports Polygon for smart contracts, with Ethereum Rinkeby deprecated recently.",
        stack: [javascript, nextjs, solidity, socket, nodejs],
        source: "https://github.com/pb2323/Social_Media_App",
        media: networkin
    }

]