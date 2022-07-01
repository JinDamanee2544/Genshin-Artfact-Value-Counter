import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import dynamic from "next/dynamic";
import {AiFillLock,AiFillHome} from 'react-icons/ai'

import MockData from '../data/MockData'
import Link from "next/link";

const StatPanel = dynamic(
  ()=>import ('../components/StatPanel') , {suspense:true,ssr:true}
)

//const testUID = '809480504' || '820525870' || '801214450' || '801515382'

export default function App() {
  const [charecterData, setCharecterData] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [UID,setUID] = useState('');
  const [lockID,setLockID] = useState(false);

  const fetchData = async (UID) => {
    
    const url = `https://enka.shinshin.moe/u/${UID}`;
    const data = await axios.get(url);

    if (data.status !== 200) {
      console.log("Invalid url");
      return null;
    }
    const html = await data.data;
    
    //const html = MockData
    
    const playerInfo = html.playerInfo

    if(!html.avatarInfoList){
      setLockID(true)
      return ;
    } else {
      setLockID(false)
    }
    
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
    setCharecterData(selectedChar);
    setPlayerData(playerInfo)
  };

  useEffect(() => {
      console.log(UID);
      fetchData(UID);
  }, [UID]);
  
  const Error = () =>{
    return (
      <div className="text-black bg-white shadow-lg rounded-lg p-6 text-xl md:text-3xl flex flex-col items-center text-center">
        <AiFillLock className="text-5xl md:text-7xl"/>
        <div className="my-4 max-w-lg">
          <h1 className="font-bold mb-2">Your UID is lock up!</h1>
          <h1>Please Unlock it in Genshin Impact before search</h1>
        </div>
        <button className="btn btn-ghost bg-gradient-to-tr from-red-500 to-orange-500 mt-2 text-lg md:text-2xl text-white"
         onClick={()=>window.location.reload()}>
          <AiFillHome className="mr-4"/>
          Back
        </button>
      </div>
    )
  }
  return (
    <main className="bg-gray-300 flex justify-center items-center h-full min-h-screen overflow-auto p-10 ">
      <Suspense fallback={<Spinner/>}>
        {lockID===true? <Error/>
          : <StatPanel charecterData={charecterData} UID={UID} setUID={setUID} playerData={playerData}/>
        }
      </Suspense>
    </main>
  );
}
/*
<div className="rounded-xl bg-white  mx-10 mb-6 p-6 lg:mb-0 lg:col-span-1 duration-200 w-fit">
        
        <button className="p-2">
          <a className="font-bold text-3xl text-black">Genshin Artifact Value Calculator</a>
        </button>
        <div className="">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>SubStat</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <td>Cy Ganderton</td>
                <td>3.3</td>
              </tr>
              <tr className="hover">
                <td>Hart Hagerty</td>
                <td>6.6</td>
              </tr>
              <tr className="hover">
                <td>Brice Swyre</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
*/