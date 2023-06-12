import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Noto_Sans_JP } from 'next/font/google'

// import "ress"
const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({Component,pageProps} : AppProps){


  return (
    <main className={notojp.className}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  )
}

