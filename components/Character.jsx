import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { formatChar } from "../logicController/logic";
import MainStat from "./MainStat";
import { motion } from 'framer-motion'
const dataContext = createContext();
export const useData = () => {
    return useContext(dataContext)
}

const Character = ({ character }) => {

    const initValue = {
        equip_type: '',
        value: 0
    }

    const [select, setSelect] = useState({
        'FLOWER': [initValue],
        'FEATHER': [initValue],
        'WATCH': [initValue],
        'GOBLET': [initValue],
        'HELMET': [initValue],
    })

    const [overAll, setOverAll] = useState({
        'FLOWER': 0,
        'FEATHER': 0,
        'WATCH': 0,
        'GOBLET': 0,
        'HELMET': 0,
    })

    const [charVal, setCharVal] = useState(0)

    useEffect(() => {
        const sum = Object.values(overAll).reduce((acc, curr) => acc + curr, 0)
        setCharVal(sum)
    }, [overAll])

    /*
    useEffect(()=>{
        console.log('Select',select);
    },[select])
    */

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1, x: '-100vw' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: '100vw' }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.01 }}

            className="min-w-max"
        >
            <div className="w-full bg-red-500 rounded-t-xl p-2 flex justify-between px-4">
                <h1 className="font-bold text-white text-xl">{formatChar(character.charID)}</h1>
                <span className="text-white text-xl font-bold"> {charVal.toString().slice(0, 4)} / 45 </span>
            </div>
            <div className="bg-white shadow-xl p-4 pt-2 rounded-b-xl">
                <div className="grid auto-cols-fr auto-rows-fr grid-cols-1 mobile:grid-cols-2 md:grid-flow-col gap-6 ">
                    {
                        character.selectedStat.map((atf, idx) => {
                            return (
                                <dataContext.Provider key={idx} value={{ select, setSelect, overAll, setOverAll }}>
                                    <MainStat atf={atf} />
                                </dataContext.Provider>
                            )
                        })}
                </div>
            </div>
        </motion.div>
    )
}
export default Character;