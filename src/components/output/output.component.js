import React from 'react'
import { Container, Button, TextArea } from './output.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function OutputComponent () {

    return (
        <>
            <Container>
                <Button type="button">copy</Button>
                <TextArea placeholder="output" disabled/>
            </Container>
        </>
    )

}