import { useEffect, useState } from "react";
import { formatStat ,formatEquip } from "../logicController/logic";
import Substat from "./Substat";

const MainStat = ({atf,idx,overAll,setOverAll}) => {
    const initValue = {
        equip_type : '',
        value : 0
    }

    const [selecting,setSelecting] = useState([initValue]);
    const [sumValue,setSumValue] = useState(0)


    useEffect(()=>{   
        const sum = selecting.map(equip=>equip.value).reduce((prev, curr) => prev + curr, 0)
        setSumValue(sum)
    },[selecting])
    /*
    useEffect(()=>{
        const newOverAll = Array.from(overAll)
        newOverAll[parseInt(idx)] = sumValue
        setOverAll(newOverAll)
    },[sumValue])
    */

    return (
        <div className="text-slate-700">
            <h1 className="font-bold">{formatEquip(atf.equipType)}</h1>
            <div className="flex justify-between">
                <p>{formatStat(atf.mainStat.mainPropId)}</p>
                <span>{atf.mainStat.statValue}</span>
            </div>
            <div className="grid gap-y-1">
            {atf.substat.map((substat,idx)=>{
                return (
                <Substat key={idx} substat={substat} selecting={selecting} setSelecting={setSelecting} /> 
                )
            })}
            </div>
            <btn className="bg-orange-500 text-white btn btn-sm border-none hover:bg-orange-500 w-full text-xl mt-2">
                <span>{sumValue}</span>
            </btn>
        </div>
    )
}
export default MainStat;