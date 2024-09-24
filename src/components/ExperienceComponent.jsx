import { ScrollShadow } from "@nextui-org/react";
import React from "react";

function ExperienceComponent() {
  const experiences = [
    {
      company: "PT. Arga Solusi Technologies",
      location: "Jakarta",
      title: "Programming Staff",
      date: "Mei 2023 - Present",
      role: [
        {
          name: "Maintainers",
          description: `
            As a Website Maintainer at Argasolusi Technologies, I ensured the smooth operation and performance of the company's website. My key responsibilities included:

            - Performing regular updates and security patches.
            - Monitoring website performance and resolving issues quickly.
            - Collaborating with developers to implement new features.
            - Managing backups and version control to protect data.
            - Analyzing website analytics and user feedback for improvements.
            - Ensuring compliance with web standards and best practices.

            Through this role, I gained experience in CMS, web server administration, and front-end technologies, helping to maintain a high-performing website.
            `,
        },
        {
          name: "FullStack Web Developer",
          description: `
            As a Fullstack Web Developer at Argasolusi Technologies from May to September 2023, I developed and maintained web applications using Laravel, including CMS Voyager for content management. I worked with Vue.js for the front end, managed server-side logic, handled database integration, and collaborated with teams to ensure high-quality deliverables.
            `,
        },
      ],
    },
    {
      company: "PT. Karya Teknologi Selamat Mandiri",
      location: "Jakarta",
      title: "Software Engineer",
      date: "Jan - Apr 2023",
      role: [
        {
          name: "Dekstop Dev (react based electron)",
          description: `
            As a Software Engineer at Karya Teknologi Selamat Mandiri Company for 4 months, I primarily developed desktop software applications using React and Electron. I focused on building user interfaces with React and integrating them into cross-platform desktop apps using Electron. This role allowed me to enhance my React front-end development skills and gain experience in creating desktop applications with web technologies. It involved working closely with teams and meeting project requirements.
            `,
        },
      ],
    },
    {
      company: "Median Skill",
      location: "Cimahi",
      title: "Internship",
      date: "Agu - Okt 2023",
      role: [
        {
          name: "Web Developer",
          description: `
            During my 3-month stint as a Website Developer at Median Skill, I primarily learned and built websites using WordPress. This role allowed me to gain hands-on experience with the popular content management system (CMS). I worked on creating custom WordPress themes, installing and configuring plugins, and managing website content. Through this experience, I developed a strong understanding of WordPress development, including customization, theme development, and website maintenance. Additionally, I enhanced my skills in HTML, CSS, and JavaScript while working with WordPress.
            `,
        },
      ],
    },
    {
      company: "PT. Jerbee Indonesia",
      location: "Bandung",
      title: "Internship",
      date: "Mei - Jul 2023",
      role: [
        {
          name: "Web Developer",
          description: `
            I interned as a Website Developer at PT. Jerbee Indonesia for 3 months. It was my first professional programming experience, where I worked on building and maintaining responsive websites. I used HTML, CSS, JavaScript, Laravel, and Vue.js. This internship allowed me to apply my web development skills practically and learn from experienced developers. It helped me improve my problem-solving abilities, collaboration, and attention to detail in delivering quality work. My time at Jerbee was a significant stepping stone in my career as a web developer.
            `,
        },
      ],
    },
  ];
  return (
    <div className="px-5">
      <h2 className="py-5 text-2xl font-bold" id="experiences">
        Experiences
      </h2>
      <div className=" rounded-lg bg-gray-100 from-primary  to-info shadow-md dark:bg-gradient-to-br dark:shadow-right-light">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard(props) {
  return (
    <div className="p-5">
      <h3 className="text-lg font-bold ">{props.experience.company}</h3>
      <div className="my-3 justify-between md:flex">
        <div>
          <p className="text-md ">{props.experience.title}</p>
          <p className="text-sm">{props.experience.date}</p>
        </div>
        <div className="flex flex-col md:w-[70%]">
          {props.experience.role.map((role, index) => (
            <div key={index} className="mb-5">
              {" "}
              {/* Add margin-bottom for spacing between roles */}
              <div className="relative mb-2 flex items-center gap-2">
                <div className="absolute left-[-2px] h-2 w-2 rounded-full bg-dark dark:bg-light"></div>
                <h1 className="indent-4 text-lg font-semibold">{role.name}</h1>{" "}
                {/* Ensure good font size */}
              </div>
              <ScrollShadow
                hideScrollBar
                className="max-h-[150px] overflow-auto"
              >
                {" "}
                {/* Add max-height and overflow for scroll */}
                <p
                  className="border-l-2 pl-5 text-sm leading-6"
                  dangerouslySetInnerHTML={{
                    __html: role.description.replace(/\n/g, "<br />"),
                  }}
                />
                {/* Add text formatting */}
              </ScrollShadow>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
