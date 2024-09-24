import { Avatar, AvatarIcon } from "@nextui-org/react";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { Parallax } from "react-parallax";

function HeroSectionComponent() {
  return (
    <>
      <Parallax
        blur={0}
        bgImage="/assets/images/bg.png"
        bgImageAlt="background"
        strength={200}
      >
        <div className="relative hidden min-h-80 overflow-visible px-20 md:block"></div>
      </Parallax>

      <div className="relative z-40 flex items-end justify-between px-5 dark:z-40 md:block md:px-10">
        <Avatar
          src="/assets/images/kim-2.0.jpeg"
          className="h-52 w-52 bg-gradient-to-br from-info to-dark dark:from-primary dark:to-info dark:shadow-right-light md:absolute md:top-[-140px]"
          isBordered
          icon={<AvatarIcon />}
          color="info"
        />
        <div className="right-3 flex w-[100px] flex-col items-center gap-0 rounded-lg bg-light md:absolute md:bottom-[5px] md:right-10">
          <QRCodeSVG
            className=" px-2 pt-2"
            value="https://www.cvarifinhabibi.my.id"
            size={100}
          />
          <span className="pb-2 text-center text-tiny">scan for detail</span>
        </div>
      </div>
    </>
  );
}

export default HeroSectionComponent;
