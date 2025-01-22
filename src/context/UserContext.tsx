import { useContext, createContext, useState, useEffect } from "react";
import { getUserData, login, logout, register } from "@/services/auth";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type UserContextType = {
  user: User;
  setUser: (value: User) => void;
  setIsAuthenticated: (value: boolean) => void;
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
  loginError: string | null;
  logoutUser: () => void;
  isAuthenticated: boolean;
  userLoading: boolean;
};

const UserContext = createContext<UserContextType>({
  user: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
  setUser: () => {},
  setIsAuthenticated: () => {},
  registerUser: async () => Promise.resolve(),
  registrationSuccess: false,
  setRegistrationSuccess: () => {},
  registrationError: null,
  loginError: null,
  logoutUser: () => {},
  isAuthenticated: false,
  userLoading: true,
});

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>(() => {
    return {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userLoading, setUserLoading] = useState<boolean>(false);

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
        setUser(response.data);
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
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });

      localStorage.removeItem("isAuthenticated");
    } catch (error) {
      // Handle error
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsAuthenticated,
        registerUser,
        registrationSuccess,
        setRegistrationSuccess,
        registrationError,
        loginError,
        logoutUser,
        isAuthenticated,
        userLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
