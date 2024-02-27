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
        livePreview=""
        imgSrc={webbaseDesktop}
        technolgiesUsed = {["Javascript", "HTML", "CSS", "Node.js"]}
      />
      <Project
        title="Personal Website"
        desc="This is my personal web profile build by React."
        viewCode="https://github.com/leekinming1008/Personal-Website"
        livePreview=""
        imgSrc={personalWebsite}
        technolgiesUsed = {["React", "HTML", "CSS"]}
      />
      <Project
        title="Onine Web Scrapper"
        desc="This is the web scrapper for special search engine to crap the search items price."
        viewCode="https://github.com/leekinming1008/Online-Web-Scraper"
        livePreview=""
        imgSrc={webScrapper}
        technolgiesUsed = {["Java", "JavaFx"]}
      />
    </div>
  );
}

export default Projects;
