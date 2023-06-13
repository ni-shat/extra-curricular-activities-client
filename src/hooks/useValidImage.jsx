

function isValidImageURL(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}

export default isValidImageURL;