import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import esfile from "../img/python.png";
import dotnetbooks from "../img/webapp.svg";
import currenshipfy from "../img/webapp.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"JavaScript"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"TypeScript"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"React"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Java"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"C#"} progress={"65%"} width={"65%"} />
        <SkillsSection skill={"Python"} progress={"60%"} width={"60%"} />
      </div>
      <Title title={"Projects"} span={"Projects"} />
      <div className="services-container">
        <ServicesSection
          image={dotnetbooks}
          title={"Dotnetbooks"}
          text={"Personal project"}
          width={"80%"}
        />
        <ServicesSection
          image={currenshipfy}
          title={"Currensify"}
          text={"Team project"}
          width={"80%"}
        />
        <ServicesSection
          image={esfile}
          title={"ESFile"}
          text={"Academic project"}
          width={"70%"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
