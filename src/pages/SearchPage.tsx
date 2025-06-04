import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MovieInterface } from "../interface/MovieInterface";
import config from "../config";
import MovieItem from "../components/MovieItem";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      fetchData();
    } else {
      setFilteredMovies([]);
    }
  }, [searchQuery]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${config.baseURL}/api/user/movies?search=${searchQuery}`
      );
      const json = await res.json();
      setFilteredMovies(json.data || []);
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start p-6 overflow-y-auto">
      <div className="bg-[#1D1616] w-full max-w-5xl rounded-lg p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black">
          <FaTimes size={30} />
        </button>

        {/* Search Input */}
        <div className="relative mb-6 mt-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            placeholder="Search movie..."
            className="w-full bg-slate-200 text-slate-500 rounded-full py-2 pl-10 pr-10 text-sm outline-none"
          />
          <FaSearch className="absolute left-3 top-2 text-gray-500" size={20} />
          {searchQuery && (
            <button
              className="absolute right-3 top-1 text-red-500 cursor-pointer"
              onClick={() => setSearchQuery("")}>
              Clear
            </button>
          )}
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-center text-gray-500">No movies found</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
