// ---- EXTRACT LINKS EMBED ----
export function extractUrls(content: string) {
    const regex = /(?:^|\s)((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(?:\/\S*)?)/g;
    return content.match(regex) || [];
}
