import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import dynamic from "next/dynamic";

const StatPanel = dynamic(
  ()=>import ('../components/StatPanel') , {suspense:true,ssr:true}
)

//const testUID = '809480504' || '820525870'

export default function App() {
  const [charecterData, setCharecterData] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [UID,setUID] = useState([]);


  const fetchData = async (UID) => {
    const url = `https://enka.shinshin.moe/u/${UID}`;
    const data = await axios.get(url);

    if (data.status !== 200) {
      console.log("Invalid url");
      return null;
    }

    const html = await data.data;
    
    const playerInfo = html.playerInfo // Not used now
    
    const selectedChar = html.avatarInfoList.map((character) => {
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
        //console.log(mainStat,substat);
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
    console.log(selectedChar);
    setCharecterData(selectedChar);
    setPlayerData(playerInfo)
  };

  useEffect(() => {
      fetchData(UID);
  }, [UID]);
  
  
  return (
    <main className="bg-gray-300 flex flex-col justify-center items-center h-full min-h-screen overflow-auto p-10">
      <Suspense fallback={<Spinner/>}>
        <StatPanel charecterData={charecterData} UID={UID} setUID={setUID} playerData={playerData}/>
      </Suspense>
    </main>
  );
}
