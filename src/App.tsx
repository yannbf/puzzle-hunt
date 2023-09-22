import { ThemeProvider, ensure } from '@storybook/theming';
import { themes } from '@storybook/theming/create';
import { AccountForm } from './Form';

const theme = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  ? themes.dark
  : themes.light;

function App() {
  return (
    <ThemeProvider theme={ensure(theme)}>
      <AccountForm />
    </ThemeProvider>
  );
}

export default App;
