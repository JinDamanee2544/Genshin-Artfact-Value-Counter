import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearch } from "../logicController/searchContext";
import { motion } from 'framer-motion'
const SearchBar = ({ playerData, UID, setUID, setIsFirstLoad }) => {

  // const [search, setSearch] = useState('')

  const { search, setSearch } = useSearch();

  const searchUID = () => {
    if (search && search.length === 9) {
      setUID(search);
      setIsFirstLoad(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: -20 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="flex justify-between rounded-lg p-2 bg-white mb-4 w-[90%]"
    >
      <div className="tooltip" data-tip='TO ENKA.NETWORK'>
        <button disabled={UID === '' ? false : true} >
          <a className={`btn ${UID === '' ? 'btn-disabled' : 'btn-ghost'} text-white bg-gradient-to-tr from-red-500 to-orange-500`} href={`https://enka.shinshin.moe/u/${UID}`}>
            {playerData.nickname || 'USER'}
          </a>
        </button>
      </div>
      <div className="form-control w-full ml-4">
        <div className="input-group w-full">
          <input type="number" placeholder="Search UID …" className="input input-ghost w-full text-xl"
            onChange={(e) => setSearch(e.target.value)} value={search} />
          <button className="btn btn-ghost text-white bg-gradient-to-tr from-red-500 to-orange-500"
            onClick={() => searchUID()}>
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}
export default SearchBar;