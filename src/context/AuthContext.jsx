// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getProfile = async () => {
    try {
      const res = await axios.get('https://bdeploy.vercel.app/api/auth/profile', {
        withCredentials: true
      });
      setUser(res.data); // ensure backend returns full user
    } catch (err) {
      console.error('Profile fetch error:', err.response?.data || err.message);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.post('https://bdeploy.vercel.app/api/auth/logout', {}, {
        withCredentials: true
      });
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, getProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
