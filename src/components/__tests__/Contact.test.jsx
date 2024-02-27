import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import { MessageProvider } from '../../contexts/MessageContext';
import { API_URL } from '../../constants';
import Contact from '../Contact';

beforeAll(() => {
  vi.mock('axios');
});

afterAll(() => {
  vi.clearAllMocks();
});

describe('Contact', () => {
  it('should render LinkedIn and GitHub icons', () => {
    render(<Contact />);

    const linkedInElement = screen.getByLabelText(/LinkedIn/i);
    const gitHubElement = screen.getByLabelText(/GitHub/i);

    expect(linkedInElement).toBeInTheDocument();
    expect(gitHubElement).toBeInTheDocument();
  });

  it('should render form correctly', () => {
    render(<Contact />);

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
        <Contact />
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
