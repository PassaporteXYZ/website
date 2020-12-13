import React from "react";

interface IHTMLProps {
  htmlAttributes: object,
  headComponents: any[],
  bodyAttributes: object,
  preBodyComponents: any[],
  body: string,
  postBodyComponents: any[],
};

export default (props: IHTMLProps) => {
  return (
    <html lang="en" { ...props.htmlAttributes }>
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noodp" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="PASSAPORTE,access, gitcoin, nft, panvala,pass,codingsh,blockchain, ethereum"
        />

        <meta name="generator" content="Humanoid" />
        <meta name="author:name" content="codingsh" />
        <meta name="author:alias" content="Passaporte" />
        <meta name="author:username" content="codingsh" />

        <meta property="og:site_name" content="PASSAPORTE is NFT Pass for Blockchains" />
        <meta property="og:url" content="https://passaporte.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta property="og:image" content="https://passaporte.xyz/og-image.jpg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://passaporte.xyz/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="https://passaporte.xyz/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0054F6" />
        <meta name="msapplication-TileColor" content="#0054F6" />
        <meta name="theme-color" content="#0054F6" />

        { props.headComponents }
      </head>
      <body id="___traction" {...props.bodyAttributes}>
        { props.preBodyComponents }
        <noscript key="noscript" id="gatsby-noscript">
          Guess we won't know what's in here without enabling JavaScript?
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        { props.postBodyComponents }
      </body>
    </html>
  );
};
