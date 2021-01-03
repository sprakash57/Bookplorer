export const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
export const DEFAULT_COVER = 'https://via.placeholder.com/128x196.png?text=No+cover';
export const tweetBuilder = title => {
    return `I have found ${title} with Bookplorer. You can find more at `
}
export const HTTP_STATUS = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
}
