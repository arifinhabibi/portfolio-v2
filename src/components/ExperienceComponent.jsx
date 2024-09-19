import { ScrollShadow } from "@nextui-org/react";
import React from "react";

function ExperienceComponent() {
  const experiences = [
    {
      company: "PT. Arga Solusi Technologies",
      title: "Software Engineer",
      date: "Mei 2023 - Present",
      role: [
        {
          name: "Maintainers",
          description:
            "As a Website Maintainer at Argasolusi Technologies, I ensured the website ran smoothly and efficiently. My tasks included regular updates, fixing issues, monitoring performance, and applying security patches. I worked with the development team to add new features, managed backups, and analyzed user feedback to improve the site. I also ensured the site met web standards and accessibility guidelines. This role gave me valuable experience in CMS, web server management, and front-end development, helping to support the company's online presence.",
        },
        {
          name: "Pengembangan Website",
          description:
            "As a Website Maintainer at Argasolusi Technologies, I ensured the website ran smoothly and efficiently. My tasks included regular updates, fixing issues, monitoring performance, and applying security patches. I worked with the development team to add new features, managed backups, and analyzed user feedback to improve the site. I also ensured the site met web standards and accessibility guidelines. This role gave me valuable experience in CMS, web server management, and front-end development, helping to support the company's online presence.",
        },
      ],
    },
    {
      company: "PT. Arga Solusi Technologies",
      title: "Software Engineer",
      date: "Mei 2023 - Present",
      role: [
        {
          name: "Maintainers",
          description:
            "As a Website Maintainer at Argasolusi Technologies, I ensured the website ran smoothly and efficiently. My tasks included regular updates, fixing issues, monitoring performance, and applying security patches. I worked with the development team to add new features, managed backups, and analyzed user feedback to improve the site. I also ensured the site met web standards and accessibility guidelines. This role gave me valuable experience in CMS, web server management, and front-end development, helping to support the company's online presence.",
        },
        {
          name: "Pengembangan Website",
          description:
            "As a Website Maintainer at Argasolusi Technologies, I ensured the website ran smoothly and efficiently. My tasks included regular updates, fixing issues, monitoring performance, and applying security patches. I worked with the development team to add new features, managed backups, and analyzed user feedback to improve the site. I also ensured the site met web standards and accessibility guidelines. This role gave me valuable experience in CMS, web server management, and front-end development, helping to support the company's online presence.",
        },
      ],
    },
  ];
  return (
    <div className="px-5">
      <h2 className="py-5 text-2xl font-bold">Experiences</h2>
      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
}

function ExperienceCard(props) {
  return (
    <div className="rounded-lg bg-gray-100 p-5 shadow-md" data-aos="fade-up">
      <h3 className="text-lg font-bold">{props.experience.company}</h3>
      <div className="justify-between md:flex">
        <div>
          <p className="text-md ">{props.experience.title}</p>
          <p className=" text-sm">{props.experience.date}</p>
        </div>
        <div className="flex flex-col">
          {props.experience.role.map((role, index) => (
            <div key={index} className="mb-6">
              {" "}
              {/* Add margin-bottom for spacing between roles */}
              <div className="relative mb-2 flex items-center gap-2">
                <div className="absolute left-[-2px] h-2 w-2 rounded-full bg-dark"></div>
                <h1 className="indent-4 text-lg font-semibold">{role.name}</h1>{" "}
                {/* Ensure good font size */}
              </div>
              <ScrollShadow
                hideScrollBar
                className="max-h-[150px] overflow-auto md:w-[600px]"
              >
                {" "}
                {/* Add max-height and overflow for scroll */}
                <p className="border-l-2 pl-5 text-sm leading-6">
                  {role.description}
                </p>{" "}
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
