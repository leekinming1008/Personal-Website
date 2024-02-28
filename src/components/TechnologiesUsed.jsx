import React from 'react';
import PropTypes from 'prop-types';
import TechnologyUsed from './TechnologyUsed';

function TechnologiesUsed({technolgiesUsed}) {
  return (
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        {technolgiesUsed.map((techused) => <TechnologyUsed technologyUsed = {techused}/>)}
    </ul>    
  );
}

TechnologiesUsed.propTypes = {
    technolgiesUsed: PropTypes.object.isRequired,
};

export default TechnologiesUsed;
