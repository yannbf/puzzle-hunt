import { ThemeProvider, ensure } from '@storybook/theming';
import { themes } from '@storybook/theming/create';
import { AccountForm } from './Form';

console.log(ensure(themes.light));
function App() {
  return (
    <ThemeProvider theme={ensure(themes.light)}>
      <AccountForm />
    </ThemeProvider>
  );
}

export default App;
