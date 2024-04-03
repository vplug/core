/**
 * Check if the current environment is a browser
 */
export const inBrowser = () => typeof window !== 'undefined' && 'navigator' in window
