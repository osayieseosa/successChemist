const SearchResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults.length && (
        <ul className="absolute top-[100%] w-full px-5 py-7 z-10  text-neutral-600 font-semibold text-xs bg-gradient-to-r from-[#f7f7f7cb] to-[#ffffff41] backdrop-blur-3xl border-neutral-400 border-b-2 divide-y h-[50vh] overflow-auto">
          <div className="text-center py-4">Results</div>
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
