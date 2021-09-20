import React from 'react'
import { Container } from './nav.component.styles'

/**
 * @returns {React.ReactElement} react component
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
    )

}