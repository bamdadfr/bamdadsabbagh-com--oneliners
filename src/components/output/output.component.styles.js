import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    
    margin: 0.75em 0;
`

export const Top = styled.div`
    display: flex;
    grid-gap: 0.5em;
`

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.1em;
    margin-bottom: 0.75em;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 500px;
    
    font-size: 0.7em;
`