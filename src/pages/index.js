import React from 'react'
import styled from 'styled-components'
import { DefaultLayout } from '../layouts/default/default.layout'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-gap: 20px;

    * {
        border: 1px solid black;
        width: 100%;
    }

    textarea {
        height: 500px;
    }
`

/**
 * @returns {React.ReactNode} React Component
 */
export default function IndexPage () {

    return (
        <>
            <DefaultLayout>
                <Container>
                    <input type="text" placeholder="filename"/>
                    <textarea placeholder="timestamps"/>
                </Container>
            </DefaultLayout>
        </>
    )

}