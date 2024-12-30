export function parseJson<T>(json: unknown): T | null {
    if (typeof json === 'string') {
        try {
            return JSON.parse(json) as T;
        } catch {
            console.error('Invalid JSON string:', json);
            return null;
        }
    }
    return null;
}

export const stringToLocalDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString();
}
