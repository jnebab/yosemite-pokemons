import { type ReactElement } from "react";
import {
  ChakraProvider,
  extendTheme,
  type ThemeExtension,
} from "@chakra-ui/react";

interface IThemeProvider {
  children: ReactElement;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
