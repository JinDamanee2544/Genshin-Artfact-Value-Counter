import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { formatChar } from "../logicController/logic";
import MainStat from "./MainStat";

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
    /*
    const [overAll,setOverAll] = useState({
        'FLOWER':0,
        'FEATHER':0,
        'WATCH':0,
        'GOBLET':0,
        'HELMET':0,
    })
    */
   /*
    useEffect(() => {
      console.log('change char',select);
    }, [select])
    */
    

    return (
        <div className="bg-white shadow-xl p-5 rounded-xl">
            <div className=" w-full bg-red-500 rounded p-2 mb-2 flex justify-between">
                <h1 className="font-bold text-white">{formatChar(character.charID)}</h1>
                <span className="text-white text-xl font-bold"> {} / 45 </span>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col gap-6 auto-cols-fr auto-rows-fr">
            {
            character.selectedStat.map((atf,idx)=>{
                return (
                    <MainStat key={idx}  atf={atf} select={select} setSelect={setSelect}/>
                )
            })}
            </div>
        </div>
    )
}
export default Character;