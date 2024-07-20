import { FaSearch } from "react-icons/fa"

const SearchBar = ({searchTerm,handleSearchChange}) => {
  return (
    <div className="text-3xl flex items-start mt-2 mb-4">
        <div className="relative flex items-center w-full">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black pr-2" />
            <input
                type="text"
                placeholder="search..."
                className="border bg-transparent bg-white bg-opacity-30 rounded-lg px-4 py-2 w-full text-lg outline-none pl-12"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    </div>
  )
}

export default SearchBar
