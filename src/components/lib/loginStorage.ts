export type Login = {
  username: string;
  password: string;
};

const STORAGE_KEY = "login";

export const getLoginData = (): Login | null => {
  try {
    const storedLogin = localStorage.getItem(STORAGE_KEY);
    return storedLogin ? JSON.parse(storedLogin) : null;
  } catch {
    return null;
  }
};

export const setLoginData = (newLogin: Login): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newLogin));
};

export const removeLoginData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
