export const loadToken = (): string | null => {
  return localStorage.getItem('jwt');
};

export const saveToken = (token: string): void => {
  localStorage.setItem('jwt', token);
};

export const deleteToken = (): void => {
  localStorage.removeItem('jwt');
};
