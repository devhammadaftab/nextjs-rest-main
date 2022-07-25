export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);