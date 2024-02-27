import React from 'react';
import PropTypes from 'prop-types';

function Skill({ name, children }) {
  return (
    <li className="flex flex-col items-center justify-center">
      <div className="flex size-[4.5rem] items-center justify-center fill-neutral-900 dark:fill-neutral-100">
        {children}
      </div>
      <span className="text-primary text-sm">{name}</span>
    </li>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Skill;
