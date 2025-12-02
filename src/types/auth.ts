export interface User {
  id?: string;
  email: string;
  name: string;
  phone?: string;
  location?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthError {
  message: string;
  code?: string;
}
