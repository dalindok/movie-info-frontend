import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { UserI } from "../interface/UserInterface";

interface AuthContextType {
  token: string | null;
  userData: UserI | null;
  setAuth: (token: string, userData: UserI) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserI | null>(null);

  useEffect(() => {
    // Load token and user data from localStorage on init
    const storedToken = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");
    if (storedToken && storedUserData) {
      setToken(storedToken);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const setAuth = (newToken: string, newUserData: UserI) => {
    setToken(newToken);
    setUserData(newUserData);
    localStorage.setItem("token", newToken);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ token, userData, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
