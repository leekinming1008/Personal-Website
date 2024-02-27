import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import { MessageProvider } from '../../contexts/MessageContext';
import { API_URL } from '../../constants';
import Index from '../Index';

beforeAll(() => {
  vi.mock('axios');
});

afterAll(() => {
  vi.clearAllMocks();
});

describe('Index', () => {
  it('should render all three sections titles', () => {
    render(<Index />);

    const skillsElement = screen.getByText(/Skills/i);
    const projectsElement = screen.getByText(/Projects/i);
    const contactElement = screen.getByText(/Contact/i);

    expect(skillsElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
  });

  it('should render the skills titles correctly', () => {
    render(<Index />);

    const frontEndElement = screen.getByText(/Front-end/i);
    const backEndElement = screen.getByText(/Back-end/i);
    const developmentToolsElement = screen.getByText(/Development tools/i);

    expect(frontEndElement).toBeInTheDocument();
    expect(backEndElement).toBeInTheDocument();
    expect(developmentToolsElement).toBeInTheDocument();
  });

  it('should render the skills correctly', () => {
    render(<Index />);

    const skillElement = screen.getByText(/HTML/i);

    expect(skillElement).toBeInTheDocument();
  });

  it('should render the Projects correctly', () => {
    render(<Index />);

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

  it('should render LinkedIn and GitHub icons', () => {
    render(<Index />);

    const linkedInElement = screen.getByLabelText(/LinkedIn/i);
    const gitHubElement = screen.getByLabelText(/GitHub/i);

    expect(linkedInElement).toBeInTheDocument();
    expect(gitHubElement).toBeInTheDocument();
  });

  it('should render form correctly', () => {
    render(<Index />);

    const nameInputElement = screen.getByLabelText(/Name/i);
    const emailInputElement = screen.getByLabelText(/Email/i);
    const messageInputElement = screen.getByLabelText(/Message/i);
    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });

    expect(nameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(messageInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

  it('should fetch data when user submit the form', async () => {
    axios.post.mockResolvedValue({ data: 'Mocked Data' });

    render(
      <MessageProvider>
        <Index />
      </MessageProvider>,
    );

    const nameInputElement = screen.getByLabelText(/Name/i);
    const emailInputElement = screen.getByLabelText(/Email/i);
    const messageInputElement = screen.getByLabelText(/Message/i);
    const submitButtonElement = screen.getByRole('button', { name: /Submit/i });

    await act(() => {
      fireEvent.change(nameInputElement, { target: { value: 'mockName' } });
      fireEvent.change(emailInputElement, { target: { value: 'mockEmail' } });
      fireEvent.change(messageInputElement, {
        target: { value: 'mockMessage' },
      });
      fireEvent.submit(submitButtonElement);
    });

    const inputs = {
      name: 'mockName',
      email: 'mockEmail',
      message: 'mockMessage',
    };

    expect(axios.post).toHaveBeenCalledWith(`${API_URL}/messages`, inputs);
  });
});
