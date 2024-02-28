import React from 'react';
import PropTypes from 'prop-types'

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

Experience.PropTypes = {
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Experience;
