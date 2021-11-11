import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { outputAtom } from '../../../atoms/output.atoms';

/**
 * Hook to use the output component
 *
 * @typedef {function(): void} InvokeCopy - Copy the output to the clipboard
 * @typedef {string} Output - The output string
 * @returns {{InvokeCopy, Output}} - Output component state
 */
export function useOutputComponent () {
  const [output] = useAtom (outputAtom);

  const invokeCopy = useCallback (() => {
    navigator.clipboard.writeText (output);
  }, [output]);

  return {
    invokeCopy,
    output,
  };
}
