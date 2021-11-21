import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {parseTimestamps} from '../utils/parse-timestamps';
import {parseFilename} from '../utils/parse-filename';
import {getSplitCommand} from '../utils/get-split-command';
import {setOutputAtom} from '../../../atoms/output.atoms';
import {useInput} from '../../../hooks/use-input';

/**
 * Hook to use the ffmpeg-split module
 *
 * @typedef {string} Filename - The filename of the video
 * @typedef {function():void} HandleFilename - Callback to handle the filename
 * @typedef {string} Timestamps - The timestamps of the video
 * @typedef {function():void} HandleTimestamps - Callback to handle the timestamps
 * @returns {{Filename, HandleFilename, Timestamps, HandleTimestamps}} - FFmpeg split module state
 */
export function useFfmpegSplitModule() {
  const [filename, handleFilename] = useInput();
  const [timestamps, handleTimestamps] = useInput();
  const [, setOutput] = useAtom(setOutputAtom);

  useEffect(() => {
    if (!filename) {
      return;
    }

    if (!timestamps) {
      return;
    }

    const {name, extension} = parseFilename(filename);
    if (!name || !extension) {
      return;
    }

    const parsedTimestamps = parseTimestamps(timestamps);
    if (!parsedTimestamps) {
      return;
    }

    let output = '';

    // split
    parsedTimestamps.forEach((time, index) => {
      const {start, end} = time;

      output += getSplitCommand({
        name,
        extension,
        index,
        start,
        end,
      });
    });

    // merge
    output += ' && mkvmerge -o "out.mkv" ';
    parsedTimestamps.forEach((_time, index) => {
      const splitName = `"${name} SPLIT${index}.${extension}"`;
      const prefix = index === 0 ? '' : '+ ';
      output += `${prefix}${splitName} `;
    });

    // delete
    parsedTimestamps.forEach((_time, index) => {
      const splitName = `"${name} SPLIT${index}.${extension}"`;
      output += `&& rm ${splitName} `;
    });

    setOutput(output);
  }, [filename, timestamps, setOutput]);

  return {
    filename,
    handleFilename,
    timestamps,
    handleTimestamps,
  };
}
