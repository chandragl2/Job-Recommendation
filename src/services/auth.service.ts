import { LoginCredentials, RegisterCredentials, User } from "@/types";

/**
 * Auth Service - Handles authentication operations
 * In production, this would call a real API backend
 */

export const authService = {
  /**
   * Login user with email and password
   */
  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!credentials.email || !credentials.password) {
      throw new Error("Email and password are required");
    }

    // Extract name from email
    const name = credentials.email.split("@")[0];

    const user: User = {
      email: credentials.email,
      name: name || "User",
    };

    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  /**
   * Register new user
   */
  async register(credentials: RegisterCredentials): Promise<User> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (credentials.password !== credentials.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const user: User = {
      email: credentials.email,
      name: credentials.fullName,
    };

    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  /**
   * Get current user from localStorage
   */
  getCurrentUser(): User | null {
    try {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  },

  /**
   * Logout current user
   */
  logout(): void {
    localStorage.removeItem("user");
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },
};
