export const getImage = (path: string) => {
    const url = import.meta.env.VITE_CDN_URL;
    return `${url}servers/${path}.jpg`;
};