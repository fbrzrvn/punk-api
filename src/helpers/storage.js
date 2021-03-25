const getItem = item => {
	const favoritesBeers = localStorage.getItem(item);
	return favoritesBeers ? JSON.parse(favoritesBeers) : [];
};

const saveItem = (item, value) => {
	localStorage.setItem(item, JSON.stringify(value));
};

export { getItem, saveItem };
