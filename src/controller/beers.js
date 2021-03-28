import { getItem, saveItem } from '../helpers/storage';

const FAVORITES_BEERS = 'FAVORITES_BEERS';

export const toggleFavoriteBeers = id => {
	let favoritesBeers = getItem(FAVORITES_BEERS);
	const index = favoritesBeers.indexOf(id);

	if (index >= 0) {
		favoritesBeers.splice(index, 1);
	} else {
		favoritesBeers.push(id);
	}

	saveItem(FAVORITES_BEERS, favoritesBeers);
};

export const isFavorite = id => {
	let favoritesBeers = getItem(FAVORITES_BEERS);
	const index = favoritesBeers.indexOf(id);
	return index >= 0;
};

export const saveFavoriteBeer = beer => {
	saveItem(FAVORITES_BEERS, beer);
};

export const loadFavorites = () => {
	return new Promise(resolve => resolve(getItem(FAVORITES_BEERS)));
};
