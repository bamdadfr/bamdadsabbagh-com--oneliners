import React from 'react';
import { Container, Top, Button, TextArea } from './output.component.styles';
import { useOutputComponent } from './hooks/use-output-component';

/**
 * Component to display the output of the program
 *
 * @returns {React.ReactElement} - Output component
 */
export function OutputComponent () {
  const {
    invokeCopy,
    output,
  } = useOutputComponent ();

  return (
    <>
      <Container>
        <Top>
          <Button
            type="button"
            onClick={invokeCopy}
          >
            copy
          </Button>
        </Top>
        <TextArea
          placeholder="output"
          disabled
          value={output}
        />
      </Container>
    </>
  );
}
