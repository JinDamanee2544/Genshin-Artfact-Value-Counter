import { createContext, useContext, useState } from "react";

const utilContext = createContext();

const useUtil = () => {
    return useContext(utilContext);
};
const UtilProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [isNew, setIsNew] = useState(false);

    return (
        <utilContext.Provider value={{ search, setSearch, isNew, setIsNew }} >
            {children}
        </utilContext.Provider>
    );
};
export { useUtil, UtilProvider };