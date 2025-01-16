"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { getUserData, login, logout } from "@/services/auth";

type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type UserContextType = {
  user: User;
  loginUser: (email: string, password: string) => void;
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
  loginUser: () => {},
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const setUserData = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const loginUser = async (email: string, password: string) => {
    try {
      setUserLoading(true);
      const response = await login(email, password);
      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
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
        loginUser,
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
