import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Pokedex</title>
          <meta name="title" content="title" />
          <meta name="description" content="Pokedex description" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="title" />
          <meta property="og:description" content="descrition" />
          <meta property="og:image" content="add image url" />
          <meta property="og:image:alt" content="alt" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&family=Major+Mono+Display&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
