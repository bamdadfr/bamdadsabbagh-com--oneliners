import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;

  margin: 1em;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;

  margin: 1em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-gap: 20px;

  * {
    border: 1px solid black;
    width: 100%;
  }

  textarea {
    height: 500px;
  }
`;
