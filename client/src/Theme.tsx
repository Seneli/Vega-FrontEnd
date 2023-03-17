import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // TODO: get finalized color scheme from Randa
    black: '#000000',
    backgroundGrey: '#d4d4d4',
    textGrey: '#19191b',
    primaryPink: '#e02783',
    secondaryGreen: '#81b29a',
    catastrophic: 'e76f51',
    considerable: '#f4a261',
    moderate: '#e9c46a',
    minor: '#2a9d8f',
    insignificant: '#264653',
  },
  fonts: {
    // TODO: get real fonts from Randa
    heading: 'Poppins, sans-serif',
    content: 'Arial, sans-serif;',
  },
  fontSizes: {
    small: '1em',
    medium: '1.5em',
    large: '3em',
  },
  viewport: {
    // TODO: as development progresses, add viewports
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
