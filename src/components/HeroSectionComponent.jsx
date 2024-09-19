import React from "react";

function HeroSectionComponent() {
  return (
    <div className="flex flex-col items-center">
            <img src={'/assets/images/avatar.png'} className="w-[251] h-[223]" alt="avatar" />
        <h1 className="text-5xl font-bold">I do code and
        make content about it!</h1>
        <p className="text-xl">I am a seasoned full-stack software engineer with over 
8 years of professional experience, specializing in backend development. 
My expertise lies in crafting robust and scalable SaaS-based 
architectures on the Amazon AWS platform.</p>
        <div>
            {/* avatar */}
            {/* biography */}
            {/* connection */}
        </div>
    </div>
  );
}

export default HeroSectionComponent;
