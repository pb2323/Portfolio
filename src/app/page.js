'use client';

import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Code, Briefcase, GraduationCap, Heart, FileText } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-20 animate-float"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      ></div>
    ))}
  </div>
);

const Section = ({ title, icon, children, className }) => (
  <section className={`p-6 md:p-10 ${className}`}>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center text-gray-800">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </section>
);

const Header = () => (
  <header className="bg-white bg-opacity-80 text-gray-800 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg mb-6">
    <div className="flex flex-col items-center sm:items-start sm:flex-row">
      <img 
        src="/images/profile_picture.jpg" 
        alt="Puneet Bajaj" 
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-blue-500"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Puneet Bajaj</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4">Software Engineer</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-4 justify-center sm:justify-start">
          <a href="tel:4083269383" className="flex items-center justify-center sm:justify-start hover:text-blue-600 transition-colors">
            <Phone size={16} className="mr-1" /> <span className="text-sm">(408) 326-9383</span>
          </a>
          <a href="mailto:puneet.bajaj@sjsu.edu" className="flex items-center justify-center sm:justify-start hover:text-blue-600 transition-colors">
            <Mail size={16} className="mr-1" /> <span className="text-sm">puneet.bajaj@sjsu.edu</span>
          </a>
          <span className="flex items-center justify-center sm:justify-start">
            <MapPin size={16} className="mr-1" /> <span className="text-sm">San Jose, CA</span>
          </span>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
          <HeaderButton href="https://linkedin.com/in/puneet-bajaj-" icon={<Linkedin size={16} />} text="LinkedIn" bgColor="bg-blue-600" hoverColor="hover:bg-blue-700" />
          <HeaderButton href="https://github.com/pb2323" icon={<Github size={16} />} text="GitHub" bgColor="bg-gray-800" hoverColor="hover:bg-gray-900" />
          <HeaderButton href="https://drive.google.com/file/d/1MOtaftXt9wRZ0fc6tGXD6sybETJYIGvM/view?usp=sharing" icon={<FileText size={16} />} text="Resume" bgColor="bg-green-600" hoverColor="hover:bg-green-700" />
        </div>
      </div>
    </div>
  </header>
);

const HeaderButton = ({ href, icon, text, bgColor, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`${bgColor} ${hoverColor} text-white px-3 py-2 rounded-full flex items-center justify-center transition-colors text-sm`}
  >
    {icon}
    <span className="ml-1 hidden sm:inline">{text}</span>
  </a>
);


const AboutMe = () => (
  <Section title="About Me" icon={<Code size={24} className="text-blue-600" />} className="bg-white">
    <p className="text-lg leading-relaxed text-gray-700">
      A motivated Software Engineer with expertise in developing scalable solutions and optimizing performance across various platforms. 
      Adept at leveraging frameworks like React, Next.js, and Ruby on Rails to deliver high-quality user experiences.
    </p>
  </Section>
);

const Skills = () => (
  <Section title="Skills" icon={<Code size={24} className="text-green-600" />} className="bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SkillCategory title="Languages" skills="Ruby, JavaScript, C, C++, TypeScript, Java, Python, HTML, CSS, Bash, Solidity" />
      <SkillCategory title="Frameworks" skills="Ruby on Rails, React.js, Next.js, Node.js, Express.js, Redux, Flask, Django, Socket.IO, Web3.js" />
      <SkillCategory title="Tools/Paradigms" skills="Git, GitHub, AWS S3, REST APIs, GraphQL, Docker, Kubernetes, AWS Lambda, Elasticsearch" />
      <SkillCategory title="Databases/OS" skills="MySQL, MongoDB, PostgreSQL, Redis, Linux, Unix" />
    </div>
  </Section>
);

const SkillCategory = ({ title, skills }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
    <p className="text-gray-700">{skills}</p>
  </div>
);

const Projects = () => (
  <Section title="Projects" icon={<Briefcase size={24} className="text-purple-600" />} className="bg-white">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2 text-purple-700">Network-In: Social Networking Platform for Freelancers</h3>
      <p className="mb-4 text-gray-700">A platform that enables users to create smart contracts on the Polygon blockchain, ensuring stake-based security. Includes functionalities for sharing, chat, audio, and video calls, with image storage in IPFS.</p>
      <p className="mb-4 text-gray-700"><strong>Technologies:</strong> Next.js, Node.js, Express.js, Solidity, MongoDB, Socket.IO, Web3.js, IPFS</p>
      <div className="flex space-x-4">
        <a href="https://github.com/pb2323/Social_Media_App" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">GitHub</a>
        <a href="https://network-in-25db1b54cfae.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Website</a>
      </div>
    </div>
  </Section>
);

const Experience = () => (
  <Section title="Experience" icon={<Briefcase size={24} className="text-yellow-600" />} className="bg-gray-100">
    <div className="space-y-6">
      <ExperienceItem 
        title="Software Engineer"
        company="BrowserStack"
        date="Jan 2022 – Jul 2024"
        achievements={[
          "Researched and developed support for Cucumber, boosting product adoption by 8% YoY.",
          "Engineered a video recording app, improving video log stability from 30% to 99% and reducing S3 costs by 7%.",
          "Integrated Detox testing framework, resolving a deal blocker worth $1.3 million."
        ]}
      />
      <ExperienceItem 
        title="Full Stack Developer Intern"
        company="SkoolOfCode"
        date="Oct 2021 – Jan 2022"
        achievements={[
          "Upgraded Next.js from v7 to v14 with zero downtime, improving Lighthouse score by 25%.",
          "Enhanced SEO, resulting in a 92% YoY increase in website traffic and improved Google ranking."
        ]}
      />
      <ExperienceItem 
        title="Frontend Developer Intern"
        company="Namasys Analytics"
        date="Jun 2021 – Aug 2021"
        achievements={[
          "Developed SACRD, a web application for chartered accountants, streamlining daily workflows."
        ]}
      />
      <ExperienceItem 
        title="Frontend Developer Intern"
        company="Odiware Technologies"
        date="Nov 2020 – Feb 2021"
        achievements={[
          "Created dashboards for quizzes and assignments, increasing test coverage by 30%."
        ]}
      />
    </div>
  </Section>
);

const ExperienceItem = ({ title, company, date, achievements }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
    <h4 className="text-lg font-medium text-gray-700">{company}</h4>
    <p className="text-sm text-gray-600 mb-2">{date}</p>
    <ul className="list-disc list-inside space-y-1">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-gray-700">{achievement}</li>
      ))}
    </ul>
  </div>
);

const Education = () => (
  <Section title="Education" icon={<GraduationCap size={24} className="text-blue-600" />} className="bg-white">
    <div className="space-y-6">
      <EducationItem 
        degree="Master of Science in Computer Software Engineering"
        school="San Jose State University"
        date="Expected May 2026"
      />
      <EducationItem 
        degree="Bachelor of Technology in Computer Engineering"
        school="International Institute of Information Technology, Bhubaneswar, India"
        date="May 2022"
        gpa="CGPA: 3.78/4.00"
      />
    </div>
  </Section>
);

const EducationItem = ({ degree, school, date, gpa }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-blue-700">{degree}</h3>
    <h4 className="text-lg font-medium text-gray-700">{school}</h4>
    <p className="text-sm text-gray-600">{date}</p>
    {gpa && <p className="text-sm font-medium text-gray-700 mt-1">{gpa}</p>}
  </div>
);

const Volunteer = () => (
  <Section title="Volunteer Experience" icon={<Heart size={24} className="text-blue-600" />} className="bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-700">SKY Campus Happiness Program</h3>
      <p className="text-sm text-gray-600 mb-2">Aug 2022 – Present</p>
      <p className="text-gray-700">Coordinated mental well-being workshops and organized blood donation camps for students.</p>
    </div>
  </Section>
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto p-4">
        <Header />
        <main className="space-y-6">
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Volunteer />
        </main>
      </div>
    </div>
  );
}
