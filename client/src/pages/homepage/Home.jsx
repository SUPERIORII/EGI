import React from "react";
import Header from "../../components/utils/header/Header";
import HeroSection from "./heroSection/HeroSection";
import Introduction from "./intro/Introduction";
import { ProjectSection } from "./projectSection/ProjectSection";
import OurTeam from "./ourteam/OurTeam";
import Resources from "./resources/Resources";
import News from "../news/News";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Introduction/>
      <ProjectSection/>
      <OurTeam/>
      <News/>
      <Resources/>
    </div>
  );
};

export default Home;
