import React from 'react';

function Experience({title, companyName, period, description}) {
  return (
    <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div class="hover:bg-slate-200 duration-500 p-5 rounded-md mb-5">
            <p class="text-xl">{title}</p>
            <p>{companyName}</p>
            <p class="pb-3">{period}</p>
            <p>{description}</p>
        </div>
    </div>    
  );
}

export default Experience;
