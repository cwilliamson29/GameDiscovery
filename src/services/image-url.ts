export default function getCroppedImageUrl(url: string) {
    //console.log(url);
    if (url === null) return 'https://imgs.search.brave.com/oVuoL_HUXW1Y7stx8wLcXYQwr3sngsHkuRNiKxAkX3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Ju/aW5nc2NvcmUuaW8v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvbG9uZy10YWls/LWtleXdvcmRzLXJl/c2VhcmNoLWd1aWRl/LTIucG5n'
    const target = "media/"
    const index = url.indexOf(target) + target.length

    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}