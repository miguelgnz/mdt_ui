export const register = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
) => {
  const response = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, firstName, lastName, phoneNumber }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  const data = await response.json();
  return data;
};

export const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  const data = await response.json();
  return data;
};

export const getUserData = async () => {
  const response = await fetch("http://localhost:3000/api/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();

    return {
      success: false,
      message: errorData.error || "Failed to get user data",
    };
  }

  const data = await response.json();
  return { success: true, data };
};

export const logout = async () => {
  const response = await fetch("http://localhost:3000/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();

    return { success: false, message: errorData.error || "Logout failed" };
  }

  return { success: true, message: "Logout successful" };
};
