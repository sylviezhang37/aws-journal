import { createTheme } from "@aws-amplify/ui-react";

const customTheme = createTheme({
  name: "CustomTheme",
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: { value: "#5280B5" }, // Custom primary button color
          color: { value: "#FFFFFF" }, // Custom text color
        },
      },
    },
  },
});

export default customTheme;