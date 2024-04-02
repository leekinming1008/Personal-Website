import React from 'react';
import Project from './Project';
import personalWebsite from '../assets/personal_website.png';
import productManagement from '../assets/productManagement.png';
import webbaseDesktop from '../assets/Webbase_Desktop.png';

function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <Project
        title="Webbase Desktop"
        desc="This is a web application to similate the personal desktop which provide different applications."
        viewCode="https://github.com/leekinming1008/webbase_desktop"
        imgSrc={webbaseDesktop}
        technolgiesUsed = {["Javascript", "HTML", "CSS", "Node.js"]}
        livePreview = "https://personaldesktop.netlify.app/"
      />
      <Project
        title="Personal Website"
        desc="This is my personal web profile build by React."
        viewCode="https://github.com/leekinming1008/Personal-Website"
        imgSrc={personalWebsite}
        technolgiesUsed = {["React", "HTML", "CSS"]}
        livePreview = ""
      />
      <Project
        title="Product Management System"
        desc="This is the full stack project with frontend signal webpage application write in React and backend with MongoDB and Express.js."
        viewCode="https://github.com/leekinming1008/react-product-management-system"
        imgSrc={productManagement}
        technolgiesUsed = {["React", "HTML", "CSS", "MongoDB", "Express.JS"]}
        livePreview = "https://angusproductmanagement.netlify.app/"
      />
    </div>
  );
}

export default Projects;
