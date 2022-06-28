import { useState, useEffect } from 'react';

const url = 'https://www.mocky.io/v2/5da99f9f31000036004e0a4e';

export const getCategories = (data) => {
  let categories = [];
  data.forEach((item) => {
    categories.push(...item.categories);
  });

  categories = [...new Set(categories)];

  return categories;
};

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchGames = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const dataPlusImg = data.map((item, index) => {
      const imageUrl = `https://picsum.photos/300/200?random=${index}.webp`;
      return { ...item, img: imageUrl };
    });

    setData(dataPlusImg);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { loading, data };
};
