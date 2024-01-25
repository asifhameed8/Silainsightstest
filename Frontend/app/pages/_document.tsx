import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en-US" className="dark">
            <Head />
            <body id="main-body" data-page={`page-`}>
                <Main />
                <NextScript />
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-M9QPQDKX"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
            </body>
        </Html>
    );
}
