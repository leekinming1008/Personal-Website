import React from 'react';
import Project from './Project';
import personalWebsite from '../assets/personal_website.png';
import webScrapper from '../assets/webScrapper.png'
import webbaseDesktop from '../assets/Webbase_Desktop.png'

function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <Project
        title="Webbase Desktop"
        desc="This is a web application to similate the personal desktop which provide different applications."
        viewCode="https://github.com/leekinming1008/webbase_desktop"
        imgSrc={webbaseDesktop}
        technolgiesUsed = {["Javascript", "HTML", "CSS", "Node.js"]}
      />
      <Project
        title="Personal Website"
        desc="This is my personal web profile build by React."
        viewCode="https://github.com/leekinming1008/Personal-Website"
        imgSrc={personalWebsite}
        technolgiesUsed = {["React", "HTML", "CSS"]}
      />
    </div>
  );
}

export default Projects;
