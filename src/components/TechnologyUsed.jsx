import React from 'react';
import PropTypes from 'prop-types';

function TechnologyUsed({technologyUsed}) {
  return (
    <li class="mr-1.5 mt-2">
      <div class="flex items-center rounded-full bg-zinc-600/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-700 ">{technologyUsed}</div>
    </li>
  );
}

TechnologyUsed.PropTypes = {
    technologyUsed: PropTypes.string.isRequired,
};

export default TechnologyUsed;
