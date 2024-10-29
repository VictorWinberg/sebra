import { envRequired, getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = import.meta.env.VITE_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.

export const BASE_URL = envRequired(import.meta.env.VITE_BASE_URL);
export const API_URL = envRequired(import.meta.env.VITE_API_URL);

export const FAKE_LOGIN = import.meta.env.VITE_FAKE_LOGIN === 'true'; // Enables fake login for development

if (IS_DEBUG) {
  console.log('@/config', {
    IS_DEBUG,
    IS_PRODUCTION,
    FAKE_LOGIN
  });
}
