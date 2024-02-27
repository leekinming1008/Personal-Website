import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../Project';
import odinbookImg from '../../assets/odinbook.jpeg';

describe('Project', () => {
  it('should render the Project correctly', () => {
    render(
      <Project
        title="mockTitle"
        desc="mockDesc"
        viewCode="mockViewCode"
        livePreview="mockLivePreview"
        imgSrc={odinbookImg}
      />,
    );

    const titleElement = screen.getByText(/mockTitle/i);
    const descElement = screen.getByText(/mockDesc/i);
    const viewCodeElement = screen.getByText(/View code/i);
    const livePreviewElement = screen.getByText(/Live preview/i);
    const imgElement = screen.getByRole('img');

    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
    expect(viewCodeElement).toBeInTheDocument();
    expect(livePreviewElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
