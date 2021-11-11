import { useCallback, useState } from 'react';

/**
 * Hook to handle input value
 *
 * @returns {string|function(): void[]} - Input value and setter
 */
export function useInput () {
  const [input, setInput] = useState ('');

  const handleInput = useCallback ((event) => {
    setInput (event.target.value);
  }, []);

  return [
    input,
    handleInput,
  ];
}
