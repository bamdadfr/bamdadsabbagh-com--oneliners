/**
 * Generate the split command
 *
 * @param {object} options - The options
 * @param {string} options.name - The name of the file
 * @param {string} options.extension - The extension of the file
 * @param {string} options.start - The start time
 * @param {string} options.end - The end time
 * @param {number} options.index - The index of the file
 * @returns {string} - The split command
 */
export function getSplitCommand ({ name, extension, index, start, end }) {
  const command = `ffmpeg -c:v libvpx-vp9 -i "${name}.${extension}" -ss ${start} -to ${end} -c:v copy -c:a copy "${name} SPLIT${index}.${extension}"`;
  const isNewLine = index !== 0;
  const newLine = ' && ';

  return isNewLine
    ? newLine + command
    : command;
}
