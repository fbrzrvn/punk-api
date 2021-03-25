import { useState, useEffect } from 'react';

import { saveFavoriteBeer, loadFavorites } from '../controller/beers';

const useFavoriteBeer = () => {
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {
		loadFavoritesFromStorage();
	}, []);

	const loadFavoritesFromStorage = async () => {
		const favoriteBeers = await loadFavorites();
		setFavorite(favoriteBeers);
	};

	const toggleFavoriteBeers = async id => {
		const favoriteBeersFromStorage = await loadFavorites();
		saveFavoriteBeer({
			...favoriteBeersFromStorage,
			[id]: !favoriteBeersFromStorage[id],
		});
		loadFavoritesFromStorage();
	};

	return {
		favorite,
		toggleFavoriteBeers,
	};
};

export default useFavoriteBeer;
