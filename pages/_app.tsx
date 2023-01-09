import type { AppProps } from 'next/app'
import "../styles/home.css"
import "../../styles/hero.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
