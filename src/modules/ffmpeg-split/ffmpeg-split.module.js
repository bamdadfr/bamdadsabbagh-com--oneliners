import React from 'react'
import { useFfmpegSplitModule } from './hooks/use-ffmpeg-split-module'

/**
 * @returns {React.ReactElement} react component
 */
export function FfmpegSplitModule () {

    const {
        filename,
        handleFilename,
        timestamps,
        handleTimestamps,
    } = useFfmpegSplitModule ()

    return (
        <>
            <input
                type="text"
                placeholder="filename"
                value={filename}
                onChange={handleFilename}
            />
            <textarea
                placeholder="timestamps"
                value={timestamps}
                onChange={handleTimestamps}
            />
        </>
    )

}