import React from 'react';
import PropTypes from 'prop-types';
import TechnologyUsed from './TechnologyUsed';

function TechnologiesUsed({TechnologiesUsed}) {
  return (
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        {TechnologiesUsed.map((techused) => <TechnologyUsed TechnologyUsed = {techused}/>)}
    </ul>    
  );
}

export default TechnologiesUsed;
