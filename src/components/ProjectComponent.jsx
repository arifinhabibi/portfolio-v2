import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

function ProjectComponent() {
  const projects = [
    {
      title: "Hotify - Web Statis NextJS",
      date: "Apr 2015 - Mar 2017",
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
      title: "Hotify - Web Statis NextJS",
      date: "Apr 2015 - Mar 2017",
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
  ];
  return (
    <>
      <div className="px-5">
        <h2 className="py-5 text-2xl font-bold">Projects</h2>
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
    <div
      className="my-5 transform rounded-lg bg-white p-5 shadow-lg "
      data-aos="fade-up"
    >
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {project.title}
      </h3>
      <ScrollShadow hideScrollBar className="mb-4 max-h-[200px] overflow-auto">
        <p
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{
            __html: project.description.replace(/\n/g, "<br />"),
          }}
        />
      </ScrollShadow>
      <p className="mb-4 text-sm text-gray-500">{project.date}</p>
      <Link
        to={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Project"
        className="text-sm text-blue-500 hover:text-blue-700"
      >
        View Project
      </Link>
    </div>
  );
}

export default ProjectComponent;
