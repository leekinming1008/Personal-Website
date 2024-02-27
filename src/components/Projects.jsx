import React from 'react';
import Project from './Project';
import odinbookImg from '../assets/odinbook.jpeg';
import messagingAppImg from '../assets/messaging-app.jpeg';
import whereIsWaldoImg from '../assets/where-is-waldo.jpeg';

function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <Project
        title="Shamir's Secret Sharing Online application"
        desc=""
        viewCode=""
        livePreview=""
        imgSrc={odinbookImg}
      />
      <Project
        title="Personal Website"
        desc=""
        viewCode="https://github.com/leekinming1008/Personal-Website"
        livePreview=""
        imgSrc={messagingAppImg}
      />
      <Project
        title="Onine Web Scraper"
        desc=""
        viewCode="https://github.com/leekinming1008/Online-Web-Scraper"
        livePreview=""
        imgSrc={whereIsWaldoImg}
      />
    </div>
  );
}

export default Projects;
