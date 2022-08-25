import { useEffect, useState } from "react";
import useEnka from "./useEnka";

import Swal from "sweetalert2";

const updateData = (genshinData, setCharecterData, setPlayerData) => {
    const playerInfo = genshinData.playerInfo;
    if (!genshinData.avatarInfoList) {
        //setLockID(true)
        Swal.fire({
            icon: "error",
            title: "Your UID is lock up!",
            text: "Please Unlock it in Genshin Impact before search",
        });
        return;
    }
    const selectedChar = genshinData.avatarInfoList.map((character) => {
        const charID = character.avatarId;
        const equipList = character.equipList;
        const selectedStat = equipList.slice(0, -1).map((atf) => {
            // exclude weapon
            const stat = atf.flat;
            // reliquaryMainstat
            // reliquarySubstats
            const equipType = atf.flat.equipType;
            const mainStat = stat.reliquaryMainstat;
            const substat = stat.reliquarySubstats;
            return {
                equipType,
                mainStat,
                substat,
            };
        });
        return {
            charID,
            selectedStat,
        };
    });
    setCharecterData(selectedChar);
    setPlayerData(playerInfo);
};

const useGenshinData = (UID) => {
    const { genshinData, isLoading } = useEnka(
        UID ? `https://enka.network/u/${UID}` : null
    );

    const [charecterData, setCharecterData] = useState([]);
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        if (genshinData) {
            updateData(genshinData, setCharecterData, setPlayerData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genshinData]);

    return {
        isLoading,
        charecterData,
        playerData,
    };
};
export default useGenshinData;