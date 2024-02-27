import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, desc, viewCode, livePreview, imgSrc }) {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <img
        className="w-full border border-dotted border-neutral-900 md:h-64 md:w-96 dark:border-neutral-100"
        src={imgSrc}
        alt=""
        loading="lasy"
      />
      <div className="items-between flex w-full flex-col justify-between gap-4 md:h-64 md:w-96">
        <div>
          <h2 className="text-primary">{title}</h2>
          <p className="text-secondary hyphens-auto">{desc}</p>
        </div>
        <div className="flex items-center justify-between">
          <a className="button" href={viewCode} target="_blank">
            View code
          </a>
          <a className="button" href={livePreview} target="_blank">
            Live preview
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  viewCode: PropTypes.string.isRequired,
  livePreview: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Project;
