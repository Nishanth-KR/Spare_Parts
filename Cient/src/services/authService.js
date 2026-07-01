import api from "./api";

/**
 * Authentication service for API calls
 */
const authService = {
  /**
   * Login user
   * @param {string} usernameOrEmail - Username or email
   * @param {string} password - Password
   * @returns {Promise} Response with user data and token
   */
  login: async (usernameOrEmail, password) => {
    const response = await api.post("/auth/login", {
      usernameOrEmail,
      password,
    });
    return response.data;
  },

  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @returns {Promise} Response with user data
   */
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  /**
   * Logout user
   * @returns {Promise} Response
   */
  logout: async () => {
    const response = await api.post("/auth/logout");
    return response.data;
  },

  /**
   * Get current user profile
   * @returns {Promise} Response with user data
   */
  getProfile: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  /**
   * Get user activity logs
   * @param {number} limit - Number of logs to retrieve
   * @returns {Promise} Response with activity logs
   */
  getActivityLogs: async (limit = 50) => {
    const response = await api.get(`/auth/activity-logs?limit=${limit}`);
    return response.data;
  },

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise} Response with reset token
   */
  forgotPassword: async (email) => {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  /**
   * Reset password with token
   * @param {string} token - Reset token
   * @param {string} password - New password
   * @returns {Promise} Response
   */
  resetPassword: async (token, password) => {
    const response = await api.post("/auth/reset-password", {
      token,
      password,
    });
    return response.data;
  },
};

export default authService;
