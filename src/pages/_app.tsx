import type { AppProps } from 'next/app'
import { Inter_Tight } from 'next/font/google'
import '../styles/index.css'

const font = Inter_Tight({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={font.className}><Component {...pageProps} /></div>
}
