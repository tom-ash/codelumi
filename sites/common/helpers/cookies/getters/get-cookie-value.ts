export const getCookieValue = (cookieName: string) => {
  const cookie = document.cookie
    .replace(/\s/g, '')
    .split(';')
    .find((cookie) => cookie.indexOf(cookieName) !== -1);
  if (!cookie) return null;
  return cookie.slice(cookieName.length + 1);
};
