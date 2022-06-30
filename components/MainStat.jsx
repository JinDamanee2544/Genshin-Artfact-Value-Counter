import { useContext, useEffect, useState } from "react";
import { formatStat ,formatEquip } from "../logicController/logic";
import { useSelectContext } from "./StatPanel";
import Substat from "./Substat";

const MainStat = ({atf,overAll,setOverAll}) => {

    const {select,setSelect} = useSelectContext()
    // const [selecting,setSelecting] = useState([initValue]); []
    const [sumValue,setSumValue] = useState(0)
    const [activeAtf,setActiveAtf] = useState(null)

    const atfType = formatEquip(atf.equipType);

    /*
    useEffect(()=>{   
        const sum = selecting.map(equip=>equip.value).reduce((prev, curr) => prev + curr, 0)
        setSumValue(sum)
    },[selecting])
    */
    /*
    useEffect(()=>{
        const newOverAll = Array.from(overAll)
        newOverAll[parseInt(idx)] = sumValue
        setOverAll(newOverAll)
    },[sumValue])
    */
    
    useEffect(()=>{   
        //const sum = selecting.map(equip=>equip.value).reduce((prev, curr) => prev + curr, 0)
        if(activeAtf){
            const sum = select[atfType].map(substat=>substat.value).reduce((prev,curr)=>prev+curr,0)
            setSumValue(sum)
            const newOverAll = overAll
            newOverAll[atfType] = sum;
            setOverAll(newOverAll)
        }
    },[activeAtf])


    return (
        <div className="text-slate-700">
            <h1 className="font-bold">{atfType}</h1>
            <div className="flex justify-between">
                <p>{formatStat(atf.mainStat.mainPropId)}</p>
                <span>{atf.mainStat.statValue}</span>
            </div>
            <div className="grid gap-y-1">
            {atf.substat.map((substat,idx)=>{
                return (
                <Substat key={idx} substat={substat} atfType={atfType} setActiveAtf={setActiveAtf} /> 
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