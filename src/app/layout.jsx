import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "enter test",
  description: "crud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
        <main className="ml-4 mr-4 mx-auto mt-4">
          {children}
        </main>
        </ChakraProvider>
      </body>
    </html>
  );
}
