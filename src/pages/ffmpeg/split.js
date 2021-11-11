import React from 'react';
import { DefaultLayout } from '../../layouts/default/default.layout';
import { FfmpegSplitModule } from '../../modules/ffmpeg-split/ffmpeg-split.module';

/**
 * FFmpeg Split Page
 * Path: /ffmpeg/split
 *
 * @returns {React.ReactElement} - FFmpeg Split Page
 */
export default function FfmpegSplitPage () {
  return (
    <>
      <DefaultLayout>
        <FfmpegSplitModule />
      </DefaultLayout>
    </>
  );
}
