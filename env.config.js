

const API_CONFIG = {
  BASE_URL: window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL,

  // API endpoints
  ENDPOINTS: {
    PORTFOLIO: "/portfolio/:id",
    TIMEOUT: import.meta.env.VITE_API_TIMEOUT,
  },
};

export { API_CONFIG };

export default {
  API: API_CONFIG,
};
