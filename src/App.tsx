import { ThemeProvider, ensure } from '@storybook/theming';
import { themes } from '@storybook/theming/create';
import { AccountForm, AccountFormValues } from './Form';
import { useState } from 'react';
import { Results } from './Results';

const theme = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  ? themes.dark
  : themes.light;

export type FormResponse = { values: AccountFormValues; result: { first: string; second: string } };

function App() {
  const [response, setResponse] = useState<FormResponse>();

  return (
    <ThemeProvider theme={ensure(theme)}>
      {response ? (
        <Results values={response.values} result={response.result} />
      ) : (
        <AccountForm onSubmit={setResponse} />
      )}
    </ThemeProvider>
  );
}

export default App;
