const SortCars = ({ sort, setSort }) => {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none"
    >
      <option value="">Sort By</option>
      <option value="name">Model Name (A–Z)</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
    </select>
  );
};

export default SortCars;
