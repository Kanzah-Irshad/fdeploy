// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const getProfile = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/profile", {
//         withCredentials: true
//       });
//       setUser(res.data.user);
//     } catch (err) {
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     getProfile();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, getProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user on app start
  useEffect(() => {
    axios.get('https://bdeploy.vercel.app/api/auth/profile', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const logout = () => {
    axios.post('https://bdeploy.vercel.app/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
