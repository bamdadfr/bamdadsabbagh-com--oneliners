import { useCallback, useState } from 'react'

/**
 * @returns {string|function(): void[]} form input and handler
 */
export function useInput () {

    const [input, setInput] = useState ('')

    const handleInput = useCallback ((event) => {

        setInput (event.target.value)

    }, [])

    return [
        input,
        handleInput,
    ]

}