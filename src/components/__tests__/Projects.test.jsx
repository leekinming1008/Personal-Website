import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  it('should render the Projects correctly', () => {
    render(<Projects />);

    const titleElement = screen.getByText(/Odinbook/i);
    const descElement = screen.getByText(
      /A MERN stack social media platform styled with Tailwind CSS./i,
    );
    const viewCodeElements = screen.getAllByText(/View code/i);
    const livePreviewElements = screen.getAllByText(/Live preview/i);
    const imgElements = screen.getAllByRole('img');

    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
    expect(viewCodeElements.length).toBe(3);
    expect(livePreviewElements.length).toBe(3);
    expect(imgElements.length).toBe(3);
  });
});
