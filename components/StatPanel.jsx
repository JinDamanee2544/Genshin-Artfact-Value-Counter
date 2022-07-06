import { createContext, useContext, useEffect, useState } from "react";
import Character from "./Character";

const StatPanel = ({charecterData}) => {

    return (
        <>
          <div className="grid gap-6 col-span-3 px-10 select-none">

            {charecterData.map((character, idx) => {
              return (
                <Character key={idx} character={character}/>
              );
            })}

          </div>
        </>
    )
}
/*

*/
export default StatPanel;