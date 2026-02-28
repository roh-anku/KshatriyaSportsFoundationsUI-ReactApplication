const apiHost = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");

export const ServerAPIUrl = `${apiHost}/`;