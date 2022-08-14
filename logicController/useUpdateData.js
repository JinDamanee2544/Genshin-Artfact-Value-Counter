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

export default updateData;
