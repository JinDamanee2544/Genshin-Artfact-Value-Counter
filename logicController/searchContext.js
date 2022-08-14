import { createContext, useContext, useState } from "react";

const searchContext = createContext();

const useSearch = () => {
  return useContext(searchContext);
};

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};
export { useSearch, SearchProvider };
