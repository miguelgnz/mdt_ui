"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { getUserData, login, logout, register } from "@/services/auth";

type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type UserContextType = {
  user: User;
  registerUser: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => Promise<any>;
  registrationSuccess: boolean;
  setRegistrationSuccess: (value: boolean) => void;
  registrationError: string | null;
  loginUser: (email: string, password: string) => void;
  loginError: string | null;
  logoutUser: () => void;
  setUserData: (value: User) => void;
  isAuthenticated: boolean;
  userLoading: boolean;
  setIsUserLoading: (value: boolean) => void;
};

const UserContext = createContext<UserContextType>({
  user: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
  registerUser: async () => Promise.resolve(),
  registrationSuccess: false,
  setRegistrationSuccess: () => {},
  registrationError: null,
  loginUser: () => {},
  loginError: null,
  logoutUser: () => {},
  setUserData: () => {},
  isAuthenticated: false,
  userLoading: true,
  setIsUserLoading: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);

  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);

  // Try to get user data from /api/auth/user endpoint on page load, if access is denied, set isAuthenticated to false
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setUserLoading(true);
        const response = await getUserData();
        setUserData(response.data);
        setIsAuthenticated(true);
        setUserLoading(false);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
        setUserLoading(false);
      }
    };

    const isUserAuthenticated = localStorage.getItem("isAuthenticated");
    if (isUserAuthenticated === "true") {
      fetchUserData();
    }
  }, []);

  const [user, setUser] = useState<User>(() => {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };
  });

  const setUserData = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const registerUser = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => {
    try {
      setUserLoading(true);

      const response = await register(
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      );

      setUserLoading(false);

      if (!response.success) {
        setRegistrationError(response.error);
        setRegistrationSuccess(false);
      } else {
        setRegistrationError(null);
        setRegistrationSuccess(true);
      }
    } catch (error) {
      setRegistrationError(
        "Ocurrió un error inesperado. Por favor intenta de nuevo."
      );
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      setUserLoading(true);

      const response = await login(email, password);

      setUserLoading(false);

      if (!response.success) {
        setLoginError("Credenciales incorrectos");
      } else {
        setLoginError(null);
        setUser(response.user);
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
      }
    } catch (error) {
      setLoginError("Ocurrió un error inesperado. Por favor intenta de nuevo.");
    }
  };

  const logoutUser = async () => {
    try {
      setUserLoading(true);
      await logout();
      setIsAuthenticated(false);
      setUser({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });

      // !

      localStorage.removeItem("isAuthenticated");
    } catch (error) {
      // Handle error
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  const setIsUserLoading = (value: boolean) => {
    setUserLoading(value);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
        registrationSuccess,
        setRegistrationSuccess,
        registrationError,
        loginUser,
        loginError,
        logoutUser,
        setUserData,
        isAuthenticated,
        userLoading,
        setIsUserLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
