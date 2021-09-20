import React from 'react'
import { DefaultLayout } from '../../layouts/default/default.layout'
import { FfmpegSplitModule } from '../../modules/ffmpeg-split/ffmpeg-split.module'

/**
 * @returns {React.ReactElement} react component
 */
export default function FfmpegSplitPage () {

    return (
        <>
            <DefaultLayout>
                <FfmpegSplitModule/>
            </DefaultLayout>
        </>
    )

}