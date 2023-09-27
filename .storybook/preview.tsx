import type { Preview } from "@storybook/react";
import { ThemeProvider, ensure, themes } from "@storybook/theming";

const preview: Preview = {
  // ...
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, { globals: { theme } }) => {
      const themeToSet = ensure(theme === "light" ? themes.light : themes.dark)
      console.log({ themeToSet })
      return (
        <ThemeProvider
          theme={themeToSet}
        >
          <Story />
        </ThemeProvider>
      )
    },
  ],
};
export default preview;