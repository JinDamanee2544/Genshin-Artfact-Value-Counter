import { useEffect, useState } from "react";
import { useUtil } from "../context/searchContext";
import { getLocalStorage, setLocalStorage } from "./useLocalStorage";

const useHistoryID = () => {
    const [UID, setUID] = useState("");
    const { setIsNew } = useUtil();
    // Memorize Previous UID
    useEffect(() => {
        if (UID !== "") {
            const history = JSON.parse(getLocalStorage("history-id")) || [];
            console.log(history);
            if (!history.includes(UID)) {
                history.push(UID);
                setIsNew(true);
            }
            setLocalStorage("history-id", JSON.stringify(history));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [UID]);

    return [UID, setUID];
};
export default useHistoryID;