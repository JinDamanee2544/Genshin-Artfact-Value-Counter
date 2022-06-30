import { createContext, useContext, useEffect, useState } from "react";
import { formatChar } from "../logicController/logic";
import MainStat from "./MainStat";
import Substat from "./Substat";

const selectContext = createContext();
export const useSelectContext = () => {
  return useContext(selectContext)
}


const StatPanel = ({charecterData,playerData,UID,setUID}) => {

    const [search,setSearch] = useState('')
    const [overAll,setOverAll] = useState({
      'FLOWER':0,
      'FEATHER':0,
      'WATCH':0,
      'GOBLET':0,
      'HELMET':0,
    })

    const searchUID = () =>{
        if(search && search.length===9){
          setUID(search);
        }
    }

    const initValue = {
      equip_type : '',
      value : 0
    }

    const [select,setSelect] = useState({
      'FLOWER':[initValue],
      'FEATHER':[initValue],
      'WATCH':[initValue],
      'GOBLET':[initValue],
      'HELMET':[initValue],
    })

    useEffect(()=>{
      /*
      const allSum = Object.entries(select).map(atf=>{
        //console.log('atf =',atf);
        return atf[1].map(mainStat=>{
          console.log(mainStat);
        })
      })
      console.log(allSum);
      */
      console.log('change',overAll);
    },[overAll])

    
    return (
      <selectContext.Provider value={{select,setSelect}}>
        <>
        <section className="grid gap-6">
        <section className="flex justify-between rounded-lg p-2 bg-white w-80vw">
          <a className="btn btn-ghost text-white bg-gradient-to-tr from-red-500 to-orange-500" href={`https://enka.shinshin.moe/u/${UID}`}>{playerData.nickname || 'USER'}</a>
          <div className="form-control w-full ml-4">
            <div className="input-group w-full">
              <input type="number" placeholder="Search…" className="input input-ghost w-full text-xl" 
                onChange={(e)=>setSearch(e.target.value)} value={search}/>
              <button className="btn btn-ghost text-white bg-gradient-to-tr from-red-500 to-orange-500"
              onClick={()=>searchUID()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-strokeLinecap="round" stroke-strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        {charecterData.map((character, idx) => {
          return (
            <div key={idx} className="bg-white shadow-xl p-5 rounded-xl">
              <div className=" w-full bg-red-500 rounded p-2 mb-2 flex justify-between">
                <h1 className="font-bold text-white">{formatChar(character.charID)}</h1>
                <div>
                  <span className="text-white text-xl font-bold"> {} / 45 </span>
                </div>
              </div>
              <div className="grid grid-flow-col gap-6 auto-cols-fr">
              {
                character.selectedStat.map((atf,idx)=>{
                  return (
                    <MainStat key={idx}  atf={atf} overAll={overAll} setOverAll={setOverAll}/>
                    )
                  })
                }
              </div>
              
            </div>
          );
        })}
        </section>
        </>
      </selectContext.Provider>
      
    )
}
/*

*/
export default StatPanel;