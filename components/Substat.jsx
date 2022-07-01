import { useContext, useEffect, useState } from "react";
import { formatStat, statValueCalculator } from "../logicController/logic";
import { selectContext } from "./Character";


const Substat = ({substat,atfType,setActiveAtf,select,setSelect}) => {
    const [highlight,setHighlight] = useState(false);


    const thisEquip = formatStat(substat.appendPropId)

    const statCal = statValueCalculator({
        statVal : substat.statValue,
        statType : formatStat(substat.appendPropId)
    })

    const toggleHandler = () => {
        setHighlight(!highlight)
        
        const equipValue = {
            equip_type : thisEquip,
            value : statCal,
        }
        setActiveAtf({
            type:thisEquip,
            highlight
        });
        
        if(highlight===false){
            const newSelect = select;
            newSelect[atfType] =  [...select[atfType],equipValue]
            setSelect(newSelect)
            //setSelecting([...selecting,equipValue])
        } else {
            const newSelect = select;
            newSelect[atfType] = newSelect[atfType].filter(substat=>substat.equip_type!==thisEquip)
            setSelect(newSelect)
            /*
            const filtered = (selecting.filter(equip=>{
                //console.log(`${equip.equip_type} ${equip.equip_type === substat.appendPropId} ${substat.appendPropId}`);
                return equip.equip_type !== thisEquip
            }))
            setSelecting(filtered);
            */
        }
    }

    return (
        <div className={`flex justify-between text-sm duration-200 rounded p-0.5 ${highlight===true?'bg-orange-400 text-white ':null}`}
        onClick={()=>toggleHandler()}>
            <p>{thisEquip}</p>
            <span>{substat.statValue}</span>
        </div>
    )
}
export default Substat;