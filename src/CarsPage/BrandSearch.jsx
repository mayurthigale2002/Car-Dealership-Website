const BrandSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search car model..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full sm:w-80 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none"
    />
  );
};

export default BrandSearch;
