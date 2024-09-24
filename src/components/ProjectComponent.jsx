import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

function ProjectComponent() {
  const projects = [
    {
      title: "MedicLab - Slicing Mobile UI (Flutter)",
      date: "Agu 2024 - Present",
      description: `
            In this project, I sliced the MedicLab user interface using Flutter to build a clean and user-friendly mobile application for medical services. Key aspects of the project included:

            - UI Design Implementation: Accurately translating the MedicLab design mockups into Flutter widgets, ensuring a polished and visually appealing interface.
            - State Management: Implementing state management techniques (such as Provider or Riverpod) to efficiently manage the app's state and data flow.
            - Testing and Optimization: Conducting thorough testing to ensure a smooth user experience, including performance optimization for faster loading times.
            
            This project provided me with valuable experience in Flutter development, allowing me to showcase my ability to create high-quality, responsive UIs in a mobile application context.
          `,
      link: "https://github.com/arifinhabibi/mediclab",
    },
    {
      title: "Hotify - Web Statis (NextJS)",
      date: "Mei 2024",
      description: `
            🌟 Discover the Future of Hotel Booking! 🌟
            I'm excited to share my latest project: a sleek and intuitive static landing page designed to revolutionize the hotel booking experience. Whether you're planning a vacation or a business trip, this site is your gateway to finding the perfect stay.
      
            🔗 Explore the site here: https://lnkd.in/gF2eweDT
      
            🏨 Features you'll love:
            - User-friendly interface for seamless browsing
            - Stunning visuals showcasing top hotels
            - Efficient search and filter options to find your ideal stay
            - Secure and easy-to-use booking process
      
            🎨 UI/UX Design by Syahrul Awaludin: https://lnkd.in/g5n9wpJK
            💻 Development by Muhammad Arifin Habibi: https://lnkd.in/gwHjaECN
            🚀 Built with: Next.js, Tailwind CSS, and Shadcn components
            🌐 Deployed on: Netlify
      
            This project reflects our commitment to creating impactful and user-centric web solutions. I can't wait for you to check it out and hear your thoughts!
          `,
      link: "https://hotify-preview.netlify.app/",
    },
    {
      title: "Nyieun - API Builder (NodeJS)",
      date: "Nov - Des 2023",
      description: `
            Nyieun is a Node.js app that makes building RESTful APIs easy. It helps developers quickly create secure, scalable APIs for web and mobile apps.

            With built-in features like authentication, validation, caching, and database support, Nyieun lets developers focus on their core logic. Its clear code and docs make development fast and simple.

            Whether for a basic or complex API, Nyieun speeds up the process, helping developers bring their ideas to life faster.
          `,
      link: "https://github.com/arifinhabibi/nyieun",
    },
  ];
  return (
    <>
      <div className="px-5">
        <h2 className="py-5 text-2xl font-bold" id="projects">
          Projects
        </h2>
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
        {/* </div> */}
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="my-5 rounded-lg from-primary to-light p-5 shadow-lg dark:bg-gradient-to-br dark:to-info dark:shadow-right-light ">
      <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
      <ScrollShadow hideScrollBar className="mb-4 max-h-[200px] overflow-auto">
        <p
          className="text-sm "
          dangerouslySetInnerHTML={{
            __html: project.description.replace(/\n/g, "<br />"),
          }}
        />
      </ScrollShadow>
      <p className="mb-4 text-sm ">{project.date}</p>
      <Link
        to={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Project"
        className="text-sm text-blue-500 hover:text-blue-700 dark:rounded-full dark:border-2 dark:p-2 dark:text-light"
      >
        View Project
      </Link>
    </div>
  );
}

export default ProjectComponent;
