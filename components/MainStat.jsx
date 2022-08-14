import { useContext, useEffect, useState } from "react";
import { formatStat, formatEquip } from "../logicController/logic";
import { useData } from "./Character";
import Substat from "./Substat";

const MainStat = ({ atf }) => {

    const { select, overAll, setOverAll } = useData()

    const [sumSubValue, setSubSumValue] = useState(0)    // Sum in each ATF
    const [activeAtf, setActiveAtf] = useState(null)     // Track changed ATF 

    const atfType = formatEquip(atf.equipType);

    useEffect(() => {
        //const sum = selecting.map(equip=>equip.value).reduce((prev, curr) => prev + curr, 0)
        if (activeAtf) {
            const sum = select[atfType].map(substat => substat.value).reduce((prev, curr) => prev + curr, 0)
            setSubSumValue(sum)

            setOverAll({
                ...overAll,
                [atfType]: sum
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeAtf])

    /*
    useEffect(() => {
        setSelect(select)
    }, [select])
    
    
    useEffect(()=>{
        console.log('test');
    },[select])
    */

    return (
        <div className="flex flex-col text-slate-700 text-center">
            <h1 className="font-bold">{atfType}</h1>
            <div className="flex justify-between font-bold">
                <p>{formatStat(atf.mainStat.mainPropId)}</p>
                <span>{atf.mainStat.statValue}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-y-1 md:grid-cols-1">
                {atf.substat.map((substat, idx) => {
                    return (
                        <Substat key={idx} substat={substat} atfType={atfType} setActiveAtf={setActiveAtf} />
                    )
                })}
            </div>
            <button className="bg-orange-500 text-white btn btn-sm border-none hover:bg-orange-500 w-full text-xl mt-2">
                <span>{sumSubValue.toString().slice(0, 4)}</span>
            </button>
        </div>
    )
}
export default MainStat;