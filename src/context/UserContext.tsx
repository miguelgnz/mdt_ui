"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { getUserData, loginUser } from "@/services/auth";

type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type UserContextType = {
  user: User;
  login: (email: string, password: string) => void;
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
  login: () => {},
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
        setUserData(response);
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

  const login = async (email: string, password: string) => {
    try {
      setUserLoading(true);
      const response = await loginUser(email, password);
      setIsAuthenticated(true);
      setUser(response);
    } catch (error) {
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
        login,
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
