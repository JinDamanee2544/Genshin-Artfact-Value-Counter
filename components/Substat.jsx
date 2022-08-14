import { forwardRef, useImperativeHandle, useState } from "react";
import { formatStat, statValueCalculator } from "../logicController/logic";
import { useData } from "./Character";


const Substat = forwardRef(({ substat, atfType, setActiveAtf }, ref) => {



    const { select, setSelect } = useData();

    const [highlight, setHighlight] = useState(false);


    const thisEquip = formatStat(substat.appendPropId)

    const statCal = statValueCalculator({
        statVal: substat.statValue,
        statType: formatStat(substat.appendPropId)
    })

    const toggleHandler = () => {
        setHighlight(!highlight)

        const equipValue = {
            equip_type: thisEquip,
            value: statCal,
        }
        setActiveAtf({
            type: thisEquip,
            highlight
        });

        if (highlight === false) {
            setSelect({
                ...select,
                [atfType]: [...select[atfType], equipValue]
            })
        } else {
            setSelect({
                ...select,
                [atfType]: select[atfType].filter(substat => substat.equip_type !== thisEquip)
            })
        }
    }
    // Can't provide "Clear All" feature
    useImperativeHandle(ref, () => ({
        clearAllStat: () => {
            setSelect({
                ...select,
                [atfType]: []
            })
            setHighlight(false);
            setActiveAtf(null);
            console.log(`clearAllStat ${JSON.stringify(substat)}`);
        }
    }));
    return (
        <div className={`flex justify-between text-sm duration-200 rounded p-0.5 ${highlight === true ? 'bg-purple-400 text-white ' : null}`}
            onClick={() => toggleHandler()}>
            <p>{thisEquip}</p>
            <span>{substat.statValue}</span>
        </div>
    )
})
Substat.displayName = 'Substat';
export default Substat;