import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills', () => {
  it('should render the titles correctly', () => {
    render(<Skills />);

    const frontEndElement = screen.getByText(/Front-end/i);
    const backEndElement = screen.getByText(/Back-end/i);
    const developmentToolsElement = screen.getByText(/Development tools/i);

    expect(frontEndElement).toBeInTheDocument();
    expect(backEndElement).toBeInTheDocument();
    expect(developmentToolsElement).toBeInTheDocument();
  });

  it('should render the skills correctly', () => {
    render(<Skills />);

    const skillElement = screen.getByText(/HTML/i);

    expect(skillElement).toBeInTheDocument();
  });
});
