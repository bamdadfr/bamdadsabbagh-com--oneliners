import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { outputAtom } from '../../../atoms/output.atoms'

/**
 * @typedef {function():void} InvokeCopy
 * @typedef {string} Output
 * @returns {{InvokeCopy, Output}} OutputComponent state
 */
export function useOutputComponent () {

    const [output] = useAtom (outputAtom)

    const invokeCopy = useCallback (() => {

        navigator.clipboard.writeText (output)
    
    }, [output])

    return {
        invokeCopy,
        output,
    }

}