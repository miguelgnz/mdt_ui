export const loginUser = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  console.log(response);

  if (!response.ok) {
    // Hadle error differently eg. show error message
    throw new Error("Login failed");
  }
  return response.json();
};
