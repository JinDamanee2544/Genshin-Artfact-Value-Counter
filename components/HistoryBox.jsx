import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../logicController/useLocalStorage"
import { AiOutlineClear, AiFillDelete } from "react-icons/ai";
import { useSearch } from "../logicController/searchContext";
import { motion } from 'framer-motion'
const HistoryBox = () => {
    const router = useRouter();
    const [history, setHistory] = useState([])

    useEffect(() => {
        const history = JSON.parse(getLocalStorage("history-id"))
        if (history) {
            setHistory(history)
        }
    }, [history]);

    return (
        <motion.main
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-col gap-4 bg-white p-6 rounded-lg w-[90%] my-6"
        >
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg text-black ml-4">
                    History Search
                </h1>

                <button
                    className="btn p-4 rounded-lg"
                    onClick={() => {
                        removeLocalStorage("history-id")
                        setHistory([])
                        router.push('/')
                    }}
                ><AiOutlineClear className="text-white text-xl" />
                </button>
            </div>
            <div className="p-2 flex flex-col gap-2">
                {
                    (history?.length > 0) ? history?.map((id, index) => {
                        return <HistoryList key={index} id={id} />
                    })
                        :
                        <p>No History</p>
                }
            </div>
        </motion.main>
    )
}
const HistoryList = ({ id }) => {
    const { setSearch } = useSearch();

    return (
        <main className="flex flex-row justify-between items-center w-full bg-slate-200 rounded-xl">
            <button
                key={id}
                className="btn btn-ghost px-10 rounded-lg text-base"
                onClick={() => { setSearch(id) }}
            >{id}</button>
            <button
                className="btn btn-ghost rounded-lg text-lg bg-slate-300"
                onClick={() => {
                    const history = JSON.parse(getLocalStorage("history-id")) || [];
                    history.splice(history.indexOf(id), 1);
                    setLocalStorage("history-id", JSON.stringify(history));
                }}
            >
                <AiFillDelete />
            </button>
        </main>
    )
}
export default HistoryBox