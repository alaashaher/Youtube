import React, { createContext, useState } from "react";

const INITIAL_VALUES = {
  respons: [],
  setRespons: (v) => {},
  searchText: "",
  setSearchText: (v) => {},
};
const HomeContext = createContext(INITIAL_VALUES);

export const HomeProivder = ({ children }) => {
  const [respons, setRespons] = useState(INITIAL_VALUES.respons);
  const [searchText, setSearchText] = useState(INITIAL_VALUES.searchText);

  return (
    <HomeContext.Provider
      value={{
        respons,
        setRespons,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
