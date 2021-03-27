const getItem = item => {
	const data = localStorage.getItem(item);
	return data ? JSON.parse(data) : [];
};

const saveItem = (item, value) => {
	localStorage.setItem(item, JSON.stringify(value));
};

export { getItem, saveItem };
