import { Card, Image } from "@nextui-org/react";
import React from "react";

const EducationComponent = () => {
  const educations = [
    {
      institution: "Asia Cyber University",
      degree: "S.Kom",
      year: "2024 - 2028",
      major: "Informatics",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEspAk7cGuscg/company-logo_200_200/company-logo_200_200/0/1630558785283?e=1735171200&v=beta&t=DKRgO0w6gO3zPyKA57qqFnzku38RMv_-7DxKyi9BvxI",
    },
    {
      institution: "SMKN 1 SUBANG",
      degree: "No Degree",
      year: "2020 - 2023",
      major: "Software Engineering",
      logo: "https://smkn1subang.sch.id/wp-content/uploads/2022/06/favicon.png",
    },
  ];
  return (
    <div className="px-5" id="educations">
      <h2 className="py-5 text-2xl font-bold">Educations</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <Card
            className="p-5 dark:bg-gradient-to-br dark:from-primary dark:to-info dark:text-light dark:shadow-right-light"
            key={index}
          >
            <div className="flex items-start gap-5">
              <Image
                width={100}
                height={100}
                src={edu.logo}
                className="bg-light p-2"
                alt={edu.institution}
              />
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-gray-600 dark:text-light">
                  {edu.major} - {edu.degree}
                </p>
                <p className="text-gray-500 dark:text-light">{edu.year}</p>
              </div>
            </div>
          </Card>
        ))}
        {/* Add more education items as needed */}
      </div>
    </div>
  );
};

export default EducationComponent;
