import { Footer, GameList, Message, Header, SearchForm } from './components';
import { useFetch, getCategories } from './data';
import { useState, useEffect } from 'react';

const App = () => {
  const { loading, data } = useFetch();
  const [filteredGames, setFilteredGames] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', ...getCategories(data)];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredGames(data);
      return;
    }

    setFilteredGames(data.filter((game) => game.categories.includes(selectedCategory)));
  }, [selectedCategory, data]);

  const filteredResults = filteredGames.filter((game) => game.gameName.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Header text='LeoVegas' />
      {loading && (
        <main className='min-h-screen  w-full bg-gradient-to-r from-slate-800 to-black py-4 px-5 flex flex-col text-center pt-12'>
          <div className='bg-gradient-to-r md:w-full max-w-[800px] mx-auto  from-pink-500 to-violet-500 rounded-md pt-6 pb-10'>
            <h1 className='text-lg md:text-xl font-bold tracking-wider pb-3'>Loading...</h1>
          </div>
        </main>
      )}
      {!loading && (
        <main className='min-h-screen bg-gradient-to-r from-slate-800 to-black pb-10'>
          <SearchForm categories={categories} selectedCategory={selectedCategory} searchQuery={searchQuery} setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} />
          <Message gamesData={filteredResults} />
          <GameList gamesData={filteredResults} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default App;
