// API service to connect to the backend server
const API_BASE_URL = "http://localhost:3001/api";

// Helper function for API calls
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error for ${endpoint}:`, error);
    return { success: false, error: error.message };
  }
};

// API endpoints
export const api = {
  // Friends API
  friends: {
    getAll: () => apiFetch("/friends"),
    getById: (id) => apiFetch(`/friends/${id}`),
  },

  // Groups API
  groups: {
    getAll: () => apiFetch("/groups"),
  },

  // Messages API
  messages: {
    getAll: () => apiFetch("/messages"),
    send: (messageData) =>
      apiFetch("/messages", {
        method: "POST",
        body: JSON.stringify(messageData),
      }),
  },

  // Chats API
  chats: {
    getAll: () => apiFetch("/chats"),
  },

  // Auth API
  auth: {
    login: (credentials) =>
      apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      }),
    logout: () =>
      apiFetch("/auth/logout", {
        method: "POST",
      }),
  },
};

// Error handler helper
export const handleApiError = (error) => {
  console.error("API Error:", error);
  // You can add global error handling here
  // For example, show toast notifications, redirect to login, etc.
};
