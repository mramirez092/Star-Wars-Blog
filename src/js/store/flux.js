const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			idCharacter: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			selectId: (character) => {
				setStore({ idCharacter: character });
			},
			addFavorite: () => {
				const store = getStore();
				const newFavorite = store.idCharacter;
				setStore({ favorites: [...store.favorites, newFavorite] });
			},
			removeFavorite: (like) => {
				//get the store
				const store = getStore();
				const updatedArray = store.favorites.filter((favorite) => favorite !== like);
				//reset the global store
				setStore({ favorites: updatedArray });
			}
		}
	};
};

export default getState;
