export const BASE_URL = 'https://5fba8ddd7f538800165a5dc7.mockapi.io/api';

export function resolveProfile(id) {
    return `${BASE_URL}/profiles/${id}`;
}

export function resolveCompany(id) {
    return `${BASE_URL}/companies/${id}`;
}

export function resolveLocation(id) {
    return `${BASE_URL}/locations/${id}`;
}