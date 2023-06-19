import type { AppProps } from 'next/app'
// import "../styles/style.scss"
import "ress"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
