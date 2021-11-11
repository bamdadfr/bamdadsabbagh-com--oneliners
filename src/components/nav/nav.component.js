import React from 'react';
import { Container } from './nav.component.styles';

/**
 * Component to render the navbar
 *
 * @returns {React.ReactElement} - Navbar component
 */
export function NavComponent () {
  return (
    <>
      <Container>
        <select>
          <option>ffmpeg</option>
        </select>
        <select>
          <option>split</option>
        </select>
      </Container>
    </>
  );
}
