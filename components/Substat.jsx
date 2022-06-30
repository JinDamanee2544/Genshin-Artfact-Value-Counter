import { useState } from "react";
import { formatStat, statValueCalculator } from "../logicController/logic";

const Substat = ({substat,selecting,setSelecting}) => {
    const [highlight,setHighlight] = useState(false);

    const toggleHandler = () => {
        setHighlight(!highlight)
        
        const equipValue = {
            equip_type : substat.appendPropId,
            value : statValueCalculator({
                statVal : substat.statValue,
                statType : formatStat(substat.appendPropId)
            })
        }

        if(highlight===false){
            setSelecting([...selecting,equipValue])
        } else {
            const filtered = (selecting.filter(equip=>{
                //console.log(`${equip.equip_type} ${equip.equip_type === substat.appendPropId} ${substat.appendPropId}`);
                return equip.equip_type !== substat.appendPropId
            }))
            setSelecting(filtered);
        }
    }

    return (
        <div className={`flex justify-between text-sm duration-200 rounded p-0.5 ${highlight===true?'bg-orange-400 text-white ':null}`}
        onClick={()=>toggleHandler()}>
            <p>{formatStat(substat.appendPropId)}</p>
            <span>{substat.statValue}</span>
        </div>
    )
}
export default Substat;