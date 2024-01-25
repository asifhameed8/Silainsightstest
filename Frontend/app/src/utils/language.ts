export const tranxNovaGet = async (module: string, key: string, fallback?: string) => {
    let lang: string | null = 'en';
    if (typeof localStorage != 'undefined' && localStorage.getItem('defaultLang')) lang = localStorage.getItem('defaultLang');
    try {
        // Dynamically import the module
        const translationData = await import(`./../../locales/${lang}/${module}.json`);
        // Access the imported module
        const data = translationData.default;
        console.log('data', data);
        let out = tranxNovaFindNestedKey(data, key);
        if (out) return out;
        if (fallback) return fallback;
        return 'no-translation';
    } catch (error) {
        console.error('Error loading translation:', error);
        return 'no-translation';
    }
};

export const tranxNovaSetDefaultLang = (lang: string) => {
    if (typeof localStorage != 'undefined' && localStorage.getItem('defaultLang')) localStorage.setItem('defaultLang', lang);
};

export const tranxNovaGetDefaultLang = () => {
    let lang: string | null = 'en';
    if (typeof localStorage != 'undefined' && localStorage.getItem('defaultLang')) lang = localStorage.getItem('defaultLang');
    return lang;
};

export const tranxNovaFindNestedKey = (obj: any, keyPath: string): any | undefined => {
    const keys = keyPath.split('.');
    for (const key of keys) {
        if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            obj = obj[key];
        } else {
            return undefined;
        }
    }

    return obj;
};
