"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Global states
  const [formType, setFormType] = useState("xport_assessment");
  const [paymentType, setPaymentType] = useState("domestic");

  const [applicationId, setApplicationId] = useState("");
  const [applicantId, setApplicantId] = useState("");
  const [paymentform,setPaymentForm] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    const storedApplicantId = localStorage.getItem("applicantId");
    const storedApplicationId = localStorage.getItem("applicationId");
     
    console.log("auth local storage details are:", storedApplicantId,storedApplicationId,storedToken)

    // Defer state updates to avoid synchronous cascading renders during effect phase
    setTimeout(() => {
      if (storedToken) {
        setToken(storedToken);
      }

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Error parsing stored user in AuthContext", e);
        }
      }

      if (storedApplicantId) {
        setApplicantId(storedApplicantId);
      }

      if (storedApplicationId) {
        setApplicationId(storedApplicationId);
      }

      setLoading(false);
    }, 0);
  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);

    // Reset global state on logout
    setFormType("");
    setPaymentType("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        isAuthenticated: !!token,

        login,
        logout,

        paymentform,
        setPaymentForm,

        setToken,

        setUser,

        formType,
        setFormType,

        paymentType,
        setPaymentType,

        applicationId,
        setApplicationId,

        applicantId,
        setApplicantId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
