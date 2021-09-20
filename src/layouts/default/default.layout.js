import React from 'react'
import PropTypes from 'prop-types'
import { Container, Left, Right, Content } from './default.layout.styles'
import { NavComponent } from '../../components/nav/nav.component'
import { OutputComponent } from '../../components/output/output.component'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    return (
        <>
            <Container>
                <Left>
                    <NavComponent/>
                    <Content>
                        {children}
                    </Content>
                </Left>
                <Right>
                    <OutputComponent/>
                </Right>
            </Container>
        </>
    )

}

DefaultLayout.propTypes = propTypes