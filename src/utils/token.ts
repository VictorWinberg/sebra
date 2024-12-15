type KeyToken = 'jwt' | 'workspace';

export const loadToken = (key: KeyToken): string | null => {
  return localStorage.getItem(key);
};

export const saveToken = (key: KeyToken, token: string): void => {
  localStorage.setItem(key, token);
};

export const deleteToken = (key: KeyToken): void => {
  localStorage.removeItem(key);
};
