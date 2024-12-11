const WORKSPACE_COOKIE = 'payload-workspace';

export function getCookie(name: string) {
  const regex = new RegExp(`(^|;)\\s*${name}=([^;]*)`);
  const match = document.cookie.match(regex);
  return match ? decodeURIComponent(match[2]) : '';
}

export function setCookie(name: string, value: string) {
  const expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

export const getCookieWorkspace = () => getCookie(WORKSPACE_COOKIE);
export const setCookieWorkspace = (value: string) => setCookie(WORKSPACE_COOKIE, value);
