import React from 'react';
import Skill from './Skill';
import HtmlIcon from './icons/Html';
import CssIcon from './icons/Css';
import JavascriptIcon from './icons/Javascript';
import ReactJsIcon from './icons/ReactJs';
import NodeJsIcon from './icons/NodeJs';
import PostmanIcon from './icons/Postman';
import GitIcon from './icons/Git';
import GithubIcon from './icons/Github';
import JsonIcon from './icons/Json';
import NpmIcon from './icons/Npm';
import JavasIcon from './icons/Java';
import CPlusPlus from './icons/C++';
import Python from './icons/Python';
import Devops from './icons/Devops';
import Jenkins from './icons/Jenkins';

function Skills() {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-primary self-start">Front-end</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="HTML">
          <HtmlIcon />
        </Skill>
        <Skill name="CSS">
          <CssIcon />
        </Skill>
        <Skill name="Javascript">
          <JavascriptIcon />
        </Skill>
        <Skill name="JSON">
          <JsonIcon />
        </Skill>
        <Skill name="React">
          <ReactJsIcon />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Back-end</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Node.js">
          <NodeJsIcon />
        </Skill>
        <Skill name="Javascript">
          <JavascriptIcon />
        </Skill>
        <Skill name="JSON">
          <JsonIcon />
        </Skill>
        <Skill name="Java">
          <JavasIcon />
        </Skill>
        <Skill name="C++">
          <CPlusPlus />
        </Skill>
        <Skill name="Python">
          <Python />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Development tools</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Git">
          <GitIcon />
        </Skill>
        <Skill name="GitHub">
          <GithubIcon />
        </Skill>
        <Skill name="NPM">
          <NpmIcon />
        </Skill>
        <Skill name="Postman">
          <PostmanIcon />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Deployment tools</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Devops">
          <Devops />
        </Skill>
        <Skill name="Jenkins">
          <Jenkins />
        </Skill>
      </ul>
    </div>
  );
}

export default Skills;
