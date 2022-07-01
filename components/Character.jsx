import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { formatChar } from "../logicController/logic";
import MainStat from "./MainStat";

const dataContext = createContext();
export const useData = () => {
    return useContext(dataContext)
}

const Character = ({character}) => {

    const initValue = {
        equip_type : '',
        value : 0
      }
      
    const [select,setSelect] = useState({
        'FLOWER':[initValue],
        'FEATHER':[initValue],
        'WATCH':[initValue],
        'GOBLET':[initValue],
        'HELMET':[initValue],
    })
    
    const [overAll,setOverAll] = useState({
        'FLOWER':0,
        'FEATHER':0,
        'WATCH':0,
        'GOBLET':0,
        'HELMET':0,
    })
   
    const [charVal,setCharVal] = useState(0)

    useEffect(() => {
        const sum = Object.values(overAll).reduce((acc,curr)=>acc+curr,0)
        setCharVal(sum)
    }, [overAll])
    
    return (
        <div>
            <div className=" w-full bg-red-500 rounded-t-xl p-2 flex justify-between px-4">
                    <h1 className="font-bold text-white text-xl">{formatChar(character.charID)}</h1>
                    <span className="text-white text-xl font-bold"> {charVal.toString().slice(0,4)} / 45 </span> 
            </div>
            <div className="bg-white shadow-xl p-4 pt-2 rounded-b-xl">
                <div className="grid grid-flow-row md:grid-flow-col gap-6 auto-cols-fr auto-rows-fr">
                {
                character.selectedStat.map((atf,idx)=>{
                    return (
                        <dataContext.Provider key={idx} value={{select,setSelect,overAll,setOverAll}}>
                            <MainStat atf={atf}/>
                        </dataContext.Provider>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Character;