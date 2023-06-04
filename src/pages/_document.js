import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id='view-root'></div>
        <div id='Cart-root'></div>
      </body>
    </Html>
  )
}
