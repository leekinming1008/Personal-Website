import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const MessageContext = createContext({
  message: null,
  setMessage: () => {},
});

function MessageProvider({ children }) {
  const [message, setMessage] = useState(null);

  return (
    /* eslint-disable-next-line react/jsx-no-constructed-context-values */
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useMessage = () => useContext(MessageContext);

export { MessageProvider, useMessage };
