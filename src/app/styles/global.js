import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';
import { Breakpoints } from './breakpoints';
import '@fontsource/roboto-mono';

export const Global = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.colors.primary};
    overflow-x: hidden;

    @media screen and (max-width: ${Breakpoints.mobile - 1}px) {
      font-size: 1.3em;
    }

    @media screen and (min-width: ${Breakpoints.mobile}px) {
      font-size: 1.2em;
    }

    @media screen and (min-width: ${Breakpoints.phablet}px) {
      font-size: 1.1em;
    }

    @media screen and (min-width: ${Breakpoints.tablet}px) {
      font-size: 1em;
    }

    @media screen and (min-width: ${Breakpoints.desktop}px) {
      font-size: 1em;
    }

    @media screen and (min-width: ${Breakpoints.widescreen}px) {
      font-size: 1.1em;
    }

    @media screen and (min-width: ${Breakpoints.fullhd}px) {
      font-size: 1.2em;
    }
  }
`;
