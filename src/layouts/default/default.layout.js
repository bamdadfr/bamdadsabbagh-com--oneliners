import React from 'react';
import PropTypes from 'prop-types';
import { Container, Left, Right, Content } from './default.layout.styles';
import { NavComponent } from '../../components/nav/nav.component';
import { OutputComponent } from '../../components/output/output.component';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Component to render the default layout
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Children to render
 * @returns {React.ReactElement} - Default layout component
 */
export function DefaultLayout ({ children }) {
  return (
    <>
      <Container>
        <Left>
          <NavComponent />
          <Content>
            {children}
          </Content>
        </Left>
        <Right>
          <OutputComponent />
        </Right>
      </Container>
    </>
  );
}

DefaultLayout.propTypes = propTypes;
