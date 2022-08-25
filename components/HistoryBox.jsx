import { AiOutlineClear, AiFillDelete } from "react-icons/ai";
import { motion } from 'framer-motion'
import useHistoryList from "../logicController/useHistoryList";
const HistoryBox = () => {
    const [history, clearAllHistory, deleteHistory, setSearchID] = useHistoryList();

    return (
        <motion.main
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-col gap-4 bg-white p-6 rounded-lg w-[90%] my-6"
        >
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-black ml-4">
                    History Search
                </h1>

                <button
                    className="btn p-4 rounded-full bg-slate-600 border-0"
                    onClick={() => clearAllHistory()}
                ><AiOutlineClear className="text-white text-xl" />
                </button>
            </div>
            <div className="p-2 flex flex-col gap-2">
                {
                    (history?.length > 0) ? history?.map((id, index) => {
                        return <HistoryList
                            key={index}
                            id={id}
                            deleteHistory={deleteHistory}
                            setSearchID={setSearchID}
                        />
                    })
                        :
                        <p>No History</p>
                }
            </div>
        </motion.main>
    )
}
const HistoryList = ({ id, deleteHistory, setSearchID }) => {
    return (
        <main className="flex flex-row justify-between items-center w-full bg-slate-200 rounded-xl">
            <button
                key={id}
                className="btn btn-ghost px-10 rounded-lg text-base"
                onClick={() => { setSearchID(id) }}
            >{id}</button>
            <button
                className="btn btn-ghost rounded-lg text-lg bg-slate-300"
                onClick={() => deleteHistory(id)}
            >
                <AiFillDelete />
            </button>
        </main>
    )
}
export default HistoryBox