// UserContext.jsx
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  //새로 고침시 로그인 정보 복구
  const [currentUser, setCurrentUser] = useState(()=>{
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null ; 
  });
    
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
