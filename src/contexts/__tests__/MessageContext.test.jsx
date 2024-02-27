import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MessageProvider, useMessage } from '../MessageContext';

describe('MessageContext', () => {
  it('should provide message and setMessage', async () => {
    function MockComponent() {
      const { message, setMessage } = useMessage();

      return (
        <div>
          <button
            type="button"
            onClick={() =>
              setMessage({ error: true, text: 'Oops! Something went wrong.' })
            }
          >
            MockButton
          </button>
          <span>{message ? message.text : ''}</span>
        </div>
      );
    }

    render(
      <MessageProvider>
        <MockComponent />
      </MessageProvider>,
    );

    await userEvent.click(screen.getByText('MockButton'));

    const messageElement = screen.getByText('Oops! Something went wrong.');

    expect(messageElement).toBeInTheDocument();
  });
});
