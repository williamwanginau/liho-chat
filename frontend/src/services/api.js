import axios from "axios";

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - runs before every request
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log(
      `🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - runs after every response
apiClient.interceptors.response.use(
  (response) => {
    // Log successful responses
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);

    // Return the response data directly (keeps backend's {success, data} structure)
    return response.data;
  },
  (error) => {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      console.error(
        `❌ API Error: ${error.response.status} ${error.response.config.url}`
      );
      console.error("Error details:", error.response.data);

      // Return structured error response
      return {
        success: false,
        error: error.response.data?.message || `HTTP ${error.response.status}`,
        status: error.response.status,
      };
    } else if (error.request) {
      // Request was made but no response received
      console.error("❌ Network Error: No response received");
      return {
        success: false,
        error: "Network error - please check if the backend server is running",
        status: 0,
      };
    } else {
      // Something else happened
      console.error("❌ Request Setup Error:", error.message);
      return {
        success: false,
        error: error.message || "Unknown error occurred",
        status: -1,
      };
    }
  }
);

// API endpoints using axios
export const api = {
  // Friends API
  friends: {
    getAll: () => apiClient.get("/friends"),
    getById: (id) => apiClient.get(`/friends/${id}`),
    // Future endpoints
    // add: (friendData) => apiClient.post('/friends', friendData),
    // update: (id, friendData) => apiClient.put(`/friends/${id}`, friendData),
    // delete: (id) => apiClient.delete(`/friends/${id}`),
  },

  // Groups API
  groups: {
    getAll: () => apiClient.get("/groups"),
    getById: (id) => apiClient.get(`/groups/${id}`),
    // Future endpoints
    // add: (groupData) => apiClient.post('/groups', groupData),
    // update: (id, groupData) => apiClient.put(`/groups/${id}`, groupData),
    // delete: (id) => apiClient.delete(`/groups/${id}`),
  },

  // Messages API
  messages: {
    getAll: () => apiClient.get("/messages"),
    send: (messageData) => apiClient.post("/messages", messageData),
    getByChat: (chatId) => apiClient.get(`/messages/${chatId}`),
  },

  // Chats API
  chats: {
    getAll: () => apiClient.get("/chats"),
  },

  // Auth API (future implementation)
  auth: {
    login: (credentials) => apiClient.post("/auth/login", credentials),
    logout: () => apiClient.post("/auth/logout"),
    register: (userData) => apiClient.post("/auth/register", userData),
    me: () => apiClient.get("/auth/me"),
  },

  // Health check
  health: () => apiClient.get("/health"),
};

// Export axios instance for direct use if needed
export { apiClient };

// Helper function for handling API errors (optional)
export const handleApiError = (error) => {
  if (error.response) {
    // Server error
    console.error("Server Error:", error.response.status, error.response.data);
  } else if (error.request) {
    // Network error
    console.error("Network Error:", error.request);
  } else {
    // Other error
    console.error("Error:", error.message);
  }

  // You can add global error handling here
  // For example: toast notifications, redirect to login, etc.
};

export default api;
