import React from 'react';
import PropTypes from 'prop-types';
import Introduction from './Introduction';

function Layout({ children }) {
  return (
    <>
      <header>
        <Introduction />
      </header>
      <main>{children}</main>
      <footer className="flex items-center justify-center p-4">
        <a
          className="text-secondary hover:text-yellow-600"
          href="https://github.com/LaythAlqadhi"
          target="_blank"
        >
          Layth Alqadhi © {new Date().getFullYear()}
        </a>
        <span className="text-secondary px-4">|</span>
        <a
          className="text-secondary hover:text-yellow-600"
          href="https://github.com/LaythAlqadhi/personal-website-client-side"
          target="_blank"
        >
          My portfolio is open source
        </a>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
