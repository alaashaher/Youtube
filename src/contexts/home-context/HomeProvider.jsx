import React, { createContext, useState } from "react";

const INITIAL_VALUES = {
  respons: [],
  setRespons: (v) => {},
  searchText: "",
  setSearchText: (v) => {},
  loadingRes: false,
  setLoadingRes: (v) => {},
};
const HomeContext = createContext(INITIAL_VALUES);

export const HomeProivder = ({ children }) => {
  const [loadingRes, setLoadingRes] = useState(INITIAL_VALUES.loadingRes);
  const [respons, setRespons] = useState(INITIAL_VALUES.respons);
  const [searchText, setSearchText] = useState(INITIAL_VALUES.searchText);

  return (
    <HomeContext.Provider
      value={{
        loadingRes,
        setLoadingRes,
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
