import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}