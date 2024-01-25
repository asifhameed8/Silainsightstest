/* eslint-disable */
// const withPlugins = require('next-compose-plugins');
if (process.env.LD_LIBRARY_PATH == null || !process.env.LD_LIBRARY_PATH.includes(`${process.env.PWD}/node_modules/canvas/build/Release:`)) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD}/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/collection',
                destination: '/marketplace',
                permanent: true
            }
        ];
    },
    removeConsole: process.env.NODE_ENV === 'production',
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
        // appDir: true,
        esmExternals: 'loose', // required to make Konva & react-konva work,
        transpilePackages: ['@reservoir0x/reservoir-kit-ui']
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
        return config;
    },
    swcMinify: true,
    images: {
        domains: [
            // 'lh3.googleusercontent.com',
            // 'media.istockphoto.com',
            // 'res.cloudinary.com',
            // 'pbs.twimg.com',
            // 'i.seadn.io',
            // 'ord.ordinals.market',
            // 'cdn.simplehash.com',
            // 'media.artblocks.io',
            // 'localhost',
            // 'blur.io',
            // 'raw.githubusercontent.com',
            // 'www.element.market',
            // 'nftx.io',
            // 'sudoswap.xyz',
            'res.cloudinary.com',
            'lh3.googleusercontent.com',
            'media.istockphoto.com',
            'pbs.twimg.com',
            'meta-ruffy.s3.amazonaws.com',
            'mintstargram-prod.s3.eu-central-1.amazonaws.com',
            'mintstargram-prod.s3.amazonaws.com',
            'mintstargram.tech',
            'staging.mintstargram.tech',
            'www.mintstargram.tech',
            'i.seadn.io',
            'blur.io',
            'api-goerli.reservoir.tools',
            'logo.nftscan.com',
            'ruffy.mypinata.cloud',
            'storage.nfte.ai',
            'www.mintstargram.tech'
        ],
        dangerouslyAllowSVG: true
    },
    trailingSlash: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    }
};
/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//     dest: 'public',
//     disable: process.env.NODE_ENV === 'development'
// });
// const pwaConfig = {
//     pwa: {
//         dest: 'public',
//         disable: process.env.NODE_ENV === 'development'
//     }
// };
module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
module.exports = withBundleAnalyzer(nextConfig);
// module.exports = {
//     i18n: {
//         locales: ['en'],
//         defaultLocale: 'en'
//     }
// };
// module.exports = withPWA(nextConfig);
// module.exports = withPlugins([withPWA(pwaConfig)], nextConfig);

const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
    i18n: {
        locales: ['en', 'gr', 'ja', 'uk', 'hi', 'fr', 'ar', 'in', 'es', 'vi', 'ur','ru','it','tr','zh','tl','th'],
        defaultLocale: 'en'
    },
    webpack: (config, { isServer, webpack }) => {
        console.log('i18n.locales:', config.i18n.locales);
        console.log('i18n.defaultLocale:', config.i18n.defaultLocale);
        return config;
    },
    ...nextConfig // Spread the existing nextConfig properties here
});
