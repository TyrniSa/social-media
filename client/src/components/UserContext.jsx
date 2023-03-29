import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(() => ({
    loggedIn: null,
  }));

  const SERVER_URL = "http://localhost:4000"
  useEffect(() => {
    fetch(`${SERVER_URL}/account`, {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        // console.log({ ...data });
        setUser({ ...data });
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
};

export default Context;