import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ChakraProvider>
        <NextUIProvider>
          <Component {...pageProps} />{" "}
        </NextUIProvider>
      </ChakraProvider>
    </MantineProvider>
  );
}
