import React from "react";
import { Card, ScrollShadow, Badge } from "@nextui-org/react";
import { TrophyIcon } from "@heroicons/react/24/outline";

const AwardComponent = () => {
  const awards = [
    {
      title: "Medallion For Excellence",
      description: `
        I am honored to have received the Medallion for Excellence award in the Web Technologies (Website Design) competition category at the National Student Competency Competition for Vocational High Schools, held from October 24th to 29th, 2022. This prestigious achievement recognizes my skills and expertise in web design and development, which I have honed through dedicated practice and a passion for creating exceptional digital experiences. The competition allowed me to showcase my abilities among peers from across the nation, and earning this medallion is a testament to my commitment to excellence in the field of web technologies.
      `,
      date: "Oct 2022",
      publisher: "Kementerian Pendidikan, Kebudayaan, Riset Dan Teknologi",
      category: "Web Design",
    },
    {
      title:
        "Rank of 1st Place Winner in the Web Technologies (Website Design) competition",
      description: `
        I am deeply honored to have achieved the rank of 1st Place Winner in the Web Technologies (Website Design) competition category at the Vocational High School Student Competency Competition for West Java Province, held online from July 18th to 23rd, 2022. This esteemed recognition, awarded by the West Java Provincial Education Office, is a testament to my proficiency in web design and development, as well as my dedication to honing my skills in this field.
        Competing against talented peers from across the province, I demonstrated my expertise in creating exceptional digital experiences through cutting-edge web technologies, securing the top rank in this prestigious competition. This achievement not only validates my technical abilities but also serves as a motivating force to continue pushing the boundaries of innovation and delivering outstanding results in the realm of web development.
        I am truly grateful for this opportunity to showcase my talents and contribute to the advancement of the web technologies domain within the educational sphere of West Java Province, where I emerged as the 1st Place Winner.
      `,
      date: "Jul 2022",
      publisher: "West Java Provincial Government",
      category: "Web Design",
    },
  ];

  return (
    <div className="px-5">
      <h2 className="py-5 text-2xl font-bold">Awards & Achievements</h2>
      <Card className="p-5 dark:bg-gradient-to-br dark:from-primary dark:to-info dark:text-light dark:shadow-right-light">
        <ul className="space-y-6">
          {awards.map((award, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <Badge color="primary" variant="flat">
                  {award.category}
                </Badge>
              </div>
              <p className="mb-2 text-gray-600 dark:text-light">
                {award.date} - {award.publisher}
              </p>
              <ScrollShadow
                hideScrollBar
                className="max-h-[100px] overflow-auto"
              >
                <p
                  className=" pl-4 text-sm leading-6"
                  dangerouslySetInnerHTML={{
                    __html: award.description.replace(/\n/g, "<br />"),
                  }}
                />
              </ScrollShadow>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AwardComponent;
