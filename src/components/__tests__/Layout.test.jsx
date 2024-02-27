import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout', () => {
  it('should render Layout component correctly', () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );

    expect(screen.container).toMatchSnapshot();
  });
});
