import { useState } from "react";
import Spinner from "../components/Spinner";
// import MockData from '../data/MockData'
import SearchBar from "../components/SeachBar";
import StatPanel from '../components/StatPanel'
import HistoryBox from "../components/HistoryBox";
import Footer from "../components/Footer";
import useGenshinData from "../logicController/useGenshinFormat";
import useHistoryID from "../logicController/useHistoryID";

export default function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [UID, setUID] = useHistoryID();
  const { isLoading, playerData, charecterData } = useGenshinData(UID);

  return (
    <main className="background">
      <div className="flex flex-col justify-center items-center">
        <SearchBar UID={UID} setUID={setUID} playerData={playerData} setIsFirstLoad={setIsFirstLoad} />
        {
          !isFirstLoad && isLoading ? <Spinner /> :
            <StatPanel charecterData={charecterData} />
        }
        {
          <HistoryBox />
        }
        <Footer />
      </div>
    </main>
  );
}