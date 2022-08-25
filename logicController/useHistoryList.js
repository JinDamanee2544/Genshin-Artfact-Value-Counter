import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUtil } from "../context/searchContext";
import {
    getLocalStorage,
    removeLocalStorage,
    setLocalStorage,
} from "./useLocalStorage";

const useHistoryList = () => {
    const [history, setHistory] = useState([]);
    const { isNew, setIsNew, setSearch } = useUtil();
    const router = useRouter();

    const clearAllHistory = () => {
        removeLocalStorage("history-id");
        setHistory([]);
        router.push("/");
    };

    const deleteHistory = (id) => {
        const history = JSON.parse(getLocalStorage("history-id")) || [];
        history.splice(history.indexOf(id), 1);
        setLocalStorage("history-id", JSON.stringify(history));
        setIsNew(true);
    };

    const setSearchID = (id) => setSearch(id);

    useEffect(() => {
        const history = JSON.parse(getLocalStorage("history-id"));
        if (history) {
            setHistory(history);
            setIsNew(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNew]);

    return [history, clearAllHistory, deleteHistory, setSearchID];
};
export default useHistoryList;