import React from 'react';
import { render, screen } from '@testing-library/react';
import Introduction from '../Introduction';

describe('Introduction', () => {
  it('should render my name', () => {
    render(<Introduction />);

    const myNameElement = screen.getByText(/Layth Alqadhi/i);

    expect(myNameElement).toBeInTheDocument();
  });

  it('should render my expertise', () => {
    render(<Introduction />);

    const myExpertiseElement = screen.getByText(/Full-stack web developer/i);

    expect(myExpertiseElement).toBeInTheDocument();
  });

  it('should render Scroll down icon', () => {
    render(<Introduction />);

    const scrollDownElement = screen.getByLabelText(/Scroll down/i);

    expect(scrollDownElement).toBeInTheDocument();
  });
});
