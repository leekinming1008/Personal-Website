import React from 'react';
import { render, screen } from '@testing-library/react';
import Skill from '../Skill';

describe('Skill', () => {
  it('should render the skill correctly', () => {
    render(
      <Skill name="HTML">
        <img alt="mockIcon" />
      </Skill>,
    );

    const nameElement = screen.getByText(/HTML/i);
    const iconElement = screen.getByRole('img');

    expect(nameElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
