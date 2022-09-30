import React, { createContext, useState } from "react";

const INITIAL_VALUES = {
  respons: [],
  setRespons: (v) => {},
};
const HomeContext = createContext(INITIAL_VALUES);

export const HomeProivder = ({ children }) => {
  const [respons, setRespons] = useState(INITIAL_VALUES.respons);

  return (
    <HomeContext.Provider
      value={{
        respons,
        setRespons,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
