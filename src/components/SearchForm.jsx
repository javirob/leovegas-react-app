const SearchForm = (props) => {
  const { categories, selectedCategory, searchQuery, setSelectedCategory, setSearchQuery } = props;
  return (
    <section className='max-w-[800px] mx-auto py-4 px-5 flex flex-col text-center pt-12'>
      <div className='bg-gradient-to-r from-pink-500 to-violet-500 rounded-md pt-6 pb-10'>
        <h1 className='text-lg md:text-xl font-bold tracking-wider pb-3'>Search Games</h1>
        <div className='max-w-[90%]  md:max-w-[80%] mx-auto flex justify-center gap-2 rounded-md'>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type='search' placeholder='Search by title' className='w-[70%] p-2 rounded-md text-xs md:text-md' />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='p-1 rounded-md capitalize text-xs md:text-md'>
            {categories.map((category) => (
              <option key={category} className='p-1 capitalize text-xs md:text-md'>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
