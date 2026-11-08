// src/utils/assetUrl.js
export function assetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  const normalizedPath = path.replace(/^\/+/, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${normalizedPath}`;
}
