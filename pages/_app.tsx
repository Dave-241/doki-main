import type { AppProps } from 'next/app'
import "../styles/home.css"
import "../styles/hero.css"
import "../styles/port.css"
import "../styles/tnx.css"
import "../styles/pre_loader.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
