import React from "react";
import ProfileDownloadComponent from "./ProfileDownloadComponent";
import { QRCodeSVG } from "qrcode.react";

function SideBarComponent() {
  const contacts = [
    {
      title: "Whatsapp",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png?20220228223904",
      link: "https://wa.me/+6285882529291",
      content: "+62 858-8252-9291",
    },
    {
      title: "LinkedIn",
      icon: "data:image/png;base64,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",
      link: "https://www.linkedin.com/in/arifinhabibi",
      content: "arifinhabibi",
    },
    {
      title: "GitHub",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png",
      link: "https://github.com/arifinhabibi",
      content: "arifinhabibi",
    },
    {
      title: "Instagram",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png?20200812121755",
      link: "https://www.instagram.com/arifinhabibi_/",
      content: "@arifinhabibi_",
    },
    {
      title: "TikTok",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ionicons_logo-tiktok.svg/512px-Ionicons_logo-tiktok.svg.png",
      link: "https://www.tiktok.com/@arifinhabibi_",
      content: "@arifinhabibi_",
    },
  ];
  return (
    <div className="sticky z-20 w-full space-y-5 rounded-lg from-primary to-light px-5 py-10 shadow-lg dark:bg-gradient-to-br dark:to-info dark:text-light md:top-[10%] md:mr-5 md:h-[600px] md:w-1/3 md:overflow-y-scroll md:pb-5">
      <div>
        <h1 className="text-4xl font-bold">Muhammad Arifin Habibi</h1>
        <p className="text-lg">I'm a software engineer from Indonesia.</p>
        <div className="hidden md:block">
          <ProfileDownloadComponent />
        </div>
      </div>

      {/* About Me Section */}
      <div>
        <h2 className="text-2xl font-bold">About me</h2>
        <p className="text-md mt-2">
          I'm Muhammad Arifin Habibi, a web developer from Indonesia. I have
          experience in web design, web apps, and data science. enjoy staying
          updated with web trends.
        </p>
      </div>

      {/* Location and Contact */}
      <div>
        <h3 className="text-xl font-bold">Location</h3>
        <p className="text-md">Jakarta, Indonesia</p>
        <h3 className="mt-4 text-xl font-bold">Email</h3>
        <a href="mailto:arifinhabibi94@gmail.com" className="text-md ">
          arifinhabibi94@gmail.com
        </a>
        <h3 className="mt-4 text-xl font-bold">Contacts & Media Socials</h3>
        <div className="my-5 flex flex-wrap justify-start gap-5">
          {contacts.map((contact, index) => (
            <div
              className="flex flex-col items-center rounded-lg bg-light p-2 dark:text-dark"
              key={index}
            >
              <QRCodeSVG
                value={contact.link}
                size={85}
                title={contact.title}
                imageSettings={{
                  src: contact.icon,
                  height: 20,
                  width: 20,
                }}
                minVersion={1}
              />
              <span className="mt-1 text-tiny">{contact.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;
