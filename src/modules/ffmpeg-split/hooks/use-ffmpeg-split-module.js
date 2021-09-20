import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { parseTimestamps } from '../utils/parse-timestamps'
import { parseFilename } from '../utils/parse-filename'
import { getSplitCommand } from '../utils/get-split-command'
import { setOutputAtom } from '../../../atoms/output.atoms'
import { useInput } from '../../../hooks/use-input'

/**
 * @typedef {string} Filename
 * @typedef {function():void} HandleFilename
 * @typedef {string} Timestamps
 * @typedef {function():void} HandleTimestamps
 * @returns {{Filename, HandleFilename, Timestamps, HandleTimestamps}} FfmpegSplitModule state
 */
export function useFfmpegSplitModule () {

    const [filename, handleFilename] = useInput ()
    const [timestamps, handleTimestamps] = useInput ()
    const [, setOutput] = useAtom (setOutputAtom)

    useEffect (() => {

        if (!filename) return

        if (!timestamps) return

        const { name, extension } = parseFilename (filename)

        if (!name || !extension) return

        const parsedTimestamps = parseTimestamps (timestamps)

        if (!parsedTimestamps) return

        let output = ''

        parsedTimestamps.forEach ((time, index) => {

            const { start, end } = time

            output += getSplitCommand ({
                name,
                extension,
                index,
                start,
                end,
            })
        
        })

        setOutput (output)
    
    }, [filename, timestamps, setOutput])

    return {
        filename,
        handleFilename,
        timestamps,
        handleTimestamps,
    }

}