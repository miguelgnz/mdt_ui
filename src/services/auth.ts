export const loginUser = async (email: string, password: string) => {
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

    return { success: false, message: errorData.error || "Login failed" };
  }
  const data = await response.json();
  return { success: true, data };
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
    // Hadle error differently eg. show error message
    throw new Error("Fetching user data failed");
  }
  return response.json();
};
