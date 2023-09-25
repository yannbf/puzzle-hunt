import './globalHack';
import { ThemeProvider, ensure } from '@storybook/theming';
import { themes } from '@storybook/theming/create';
import { Form, FormValues } from './Form';
import { useState } from 'react';
import { Results } from './Results';

const theme = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  ? themes.dark
  : themes.light;

export type FormResponse = { values: FormValues; result: { text: string } };

function App() {
  const [response, setResponse] = useState<FormResponse>();

  return (
    <ThemeProvider theme={ensure(theme)}>
      {response ? (
        <Results values={response.values} result={response.result} />
      ) : (
        <Form onSubmit={setResponse} />
      )}
    </ThemeProvider>
  );
}

export default App;
