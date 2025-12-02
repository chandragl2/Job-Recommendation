// Validation utilities

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): {
  isValid: boolean;
  strength: "weak" | "fair" | "good" | "strong";
  errors: string[];
} {
  const errors: string[] = [];
  let strength: "weak" | "fair" | "good" | "strong" = "weak";

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  } else if (password.length < 8) {
    strength = "weak";
  } else if (password.length < 12) {
    strength = "fair";
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain lowercase letters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain uppercase letters");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain numbers");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Password must contain special characters (!@#$%^&*)");
  } else if (strength === "fair") {
    strength = "good";
  } else if (strength === "weak" && errors.length === 0) {
    strength = "strong";
  }

  return {
    isValid: errors.length === 0,
    strength,
    errors,
  };
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Validate form data
 */
export function validateFormData(
  data: Record<string, any>,
  schema: Record<string, (value: any) => boolean | string>
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const [field, validator] of Object.entries(schema)) {
    const result = validator(data[field]);
    if (typeof result === "string") {
      errors[field] = result;
    } else if (!result) {
      errors[field] = `${field} is invalid`;
    }
  }

  return errors;
}

/**
 * Validation schemas
 */
export const validationSchemas = {
  loginForm: {
    email: (value: string) => validateEmail(value) || "Invalid email format",
    password: (value: string) =>
      value.length >= 6 || "Password must be at least 6 characters",
  },
  registerForm: {
    fullName: (value: string) =>
      value.length >= 2 || "Full name must be at least 2 characters",
    email: (value: string) => validateEmail(value) || "Invalid email format",
    password: (value: string) => {
      const result = validatePassword(value);
      return result.isValid || result.errors.join(", ");
    },
    confirmPassword: (value: string) =>
      value.length >= 6 || "Password must be at least 6 characters",
  },
  profileForm: {
    fullName: (value: string) =>
      value.length >= 2 || "Full name must be at least 2 characters",
    email: (value: string) => validateEmail(value) || "Invalid email format",
    phone: (value: string) =>
      !value || validatePhone(value) || "Invalid phone number",
    location: (value: string) =>
      value.length >= 2 || "Location must be at least 2 characters",
  },
};
