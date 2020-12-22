export const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
export const DEFAULT_COVER = 'https://via.placeholder.com/128x196.png?text=No+cover';
export const tweetBuilder = title => {
    return `https://twitter.com/intent/tweet?text=Find books easily with #bookplorer. I have found ${title}. Go to https://suprdev.netlify.app and explore other amazing books.`
}
