import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Global } from '../../styles/global';
import { Theme } from '../../styles/theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Component to wrap the application with styled components
 *
 * @param {React.ReactNode} children - The children of the component
 * @returns {React.ReactElement} - The component
 */
export function WithStyledComponents ({ children }) {
  return (
    <>
      <Global />
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

WithStyledComponents.propTypes = propTypes;
