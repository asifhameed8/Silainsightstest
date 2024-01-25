interface SEOHeaderProps {
    title?: String;
    desc?: String;
    keywords?: String[];
    robots?: String[];
    canonical?: String;
    preload_image?: String;
    og?: {
        locale?: String;
        site_name?: String;
        title?: String;
        description?: String;
        type?: String;
        url?: String;
        image?: String;
        image_secure_url?: String;
        app_id?: String;
    };
    facebook?: {
        app_id?: String;
    };
    twitter?: {
        site?: String;
        title?: String;
        description?: String;
        image?: String;
        card?: String;
        image_alt?: String;
    };
}

export interface SEOJsonProps {
    json?: SEOHeaderProps;
}

export const SeoRenderTags = (json: SEOHeaderProps) => {
    let html = ``;

    if (json?.title) html += `<title>${json.title}</title>`;
    if (json?.title) html += `<meta name="title" content="${json.title}" />`;
    if (json?.desc) html += `<meta name="description" content="${json.desc}" />`;
    if (json?.keywords) html += `<meta name="keywords" content="${json.keywords?.join(', ')}" />`;
    if (json?.robots) html += `<meta name="robots" content="${json.robots?.join(', ')}" />`;

    if (json?.preload_image) html += `<link rel="preload" crossorigin="" as="image" href="${json.preload_image}"></link>`;
    if (json?.canonical) html += `<link rel="canonical" href="${json.canonical}"></link>`;

    if (json?.facebook) {
        if (json.facebook.app_id) html += `<meta property="fb:app_id" content="${json.facebook.app_id}" />`;
    }

    if (json?.og) {
        if (json.og.locale) html += `<meta property="og:locale" content="${json.og.locale}" />`;
        if (json.og.site_name) html += `<meta property="og:site_name" content="${json.og.site_name}" />`;
        if (json.og.title) html += `<meta property="og:title" content="${json.og.title}" />`;
        if (json.og.type) html += `<meta property="og:type" content="${json.og.type}" />`;
        if (json.og.description) html += `<meta property="og:description" content="${json.og.description}" />`;

        if (json.og.url) html += `<meta property="og:url" content="${json.og.url}" />`;
        if (json.og.image) html += `<meta property="og:image" content="${json.og.image}" />`;
        if (json.og.image_secure_url) html += `<meta property="og:image:secure_url" content="${json.og.image_secure_url}" />`;
    }

    if (json?.twitter) {
        if (json.twitter.site) html += `<meta property="twitter:site" content="${json.twitter.site}" />`;
        if (json.twitter.title) html += `<meta property="twitter:title" content="${json.twitter.title}" />`;
        if (json.twitter.description) html += `<meta property="twitter:description" content="${json.twitter.description}" />`;
        if (json.twitter.image) html += `<meta property="twitter:image" content="${json.twitter.image}" />`;
        if (json.twitter.image_alt) html += `<meta property="twitter:image:alt" content="${json.twitter.image_alt}" />`;
        if (json.twitter.card) html += `<meta property="twitter:card" content="${json.twitter.card}" />`;
    }

    // html += `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    // })(window,document,'script','dataLayer','GTM-M9QPQDKX');</script>`;

    html += ` <link  href="/fav180.png"  rel="apple-touch-icon" size="180x180" type="image/png"/>`;
    html += ` <link  href="/fav32.png"  rel="icon" size="16x16" type="image/png"/>`;
    html += ` <link  href="/fav16.png"  rel="icon" size="32x32" type="image/png"/>`;
    html += ` <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>`;

    return html;
};

export const SeoDynamicTitleAppend = (key: string, value: string) => {
    window.document.title = window.document.title.replace(key, value as string);
};

export const SeoDynamicTitleReplace = (value: string) => {
    if (typeof window !== 'undefined') {
        window.document.title = value as string;
    }
};

export interface keyProps {
    key: string;
    value: string;
}

export const SeoCreateMetatag = (params: [keyProps]) => {
    // Create a new meta tag element
    const metaTag = document.createElement('meta');
    // Set the attributes of the meta tag
    params.map(({ key, value }: keyProps) => {
        metaTag.setAttribute(key, value);
    });
    document.head.appendChild(metaTag);
};

export const SeoUpdateMetatag = (findBy: string, params: [keyProps]) => {
    // Create a new meta tag element
    if (typeof window !== 'undefined') {
        const metaTag = document.querySelector(`meta[${findBy}]`);
        // Set the attributes of the meta tag
        if (metaTag) {
            params.map(({ key, value }: keyProps) => {
                metaTag.setAttribute(key, value);
            });
        }
    }
};
