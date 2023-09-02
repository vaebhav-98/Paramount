
import Html from 'next/document'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>

        <meta name="google-site-verification" content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XBCNHM1K88"></script>
        <script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XBCNHM1K88`}
        ></script>
        <script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XBCNHM1K88', {
              page_path: window.location.pathname,
            });
          `
          }}
        ></script>

<Script
    type="text/javascript"
    async defer
    src="//assets.pinterest.com/js/pinit.js"
/>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XBCNHM1K88"></script> */}
        {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XBCNHM1K88`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XBCNHM1K88');', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
        {/* <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XBCNHM1K88');`}
        </Script> */}

      </Head>


      <Component {...pageProps} />

    </>
  )
}

export default MyApp
