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
        <main className='min-h-screen bg-gradient-to-r from-slate-800 to-black'>
          <h1>Loading...</h1>
        </main>
      )}
      {!loading && (
        <main className='min-h-screen bg-gradient-to-r from-slate-800 to-black mb-10'>
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
