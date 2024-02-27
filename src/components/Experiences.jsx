import React from 'react';
import Experience from './Experience';
import cv from '../assets/Angus_CV.pdf'

function Experiences() {
  return (
    <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <Experience 
        title = 'Consultant'
        companyName = 'Varmeego Limited'
        period = 'July 2021 to November 2023'
        description = "I possess strong development skills across various technologies. I've developed Java applications using diverse frameworks and APIs, contributing to increased sales and improved user experience in projects like the Mannings HK E-commerce platform. My expertise in automation testing, exemplified in my work with Swire Group's mobile app, resulted in a significant reduction in manual testing resources. Additionally, I've developed web applications using Spring Boot and other technologies, streamlining processes through efficient development practices."
        />
        <Experience 
        title = 'Internship'
        companyName = 'Agriculture, Fisheries and Conservation Department'
        period = 'July 2020 to August 2020'
        description = "Independently mastered an uncommon language while working solo. Gathered user needs and devised solutions, leading to a 20% search performance boost, wider search coverage, and a 90% reduction in daily report generation time. This experience exemplifies my adaptability, problem-solving, and ability to thrive independently."
        />
        <Experience 
        title = 'Internship'
        companyName = 'Agriculture, Fisheries and Conservation Department'
        period = 'June 2019 to August 2019'
        description = "I tackled complex database issues, reducing processing errors by 80-90%. This experience not only improved system efficiency, but also allowed me to gain a deep understanding of user expectations and identify areas for improvement."
        />
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div class="hover:bg-slate-200 duration-500 p-5 rounded-md mb-5">
          <a class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base" href={cv} target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
            <span>View Full
              <span class="inline-block">Résumé
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                  </path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>    
    </div>
  );
}

export default Experiences;
