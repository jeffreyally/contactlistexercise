const getState = ({ getStore, setStore, getActions }) => {
	//your API URL: "https://assets.breatheco.de/apis/fake/contact/agenda/IWantANiceCodeBeer"
	return {
		store: {
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadcharacters: () =>
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/IWantANiceCodeBeer")
					.then(response => {
						if (!response.ok) {
							console.log("Check status");
						}
						//console.log(response);
						return response.json();
					})
					.then(responseJSON => {
						//console.log(responseJSON);
						setStore({ contacts: responseJSON });
					})
					.catch(error => console.log("Error:", error)),

			delete: filtersSecondContact => {
				const store = getStore();

				console.log(filtersSecondContact);

				return setStore({ contacts: filtersSecondContact });
			},
			addToStoreContacts: newcontact => {
				console.log(newcontact);
				const store = getStore();
				console.log(store.contacts);
				let array3 = store.contacts.concat([newcontact]);
				console.log(array3);
				setStore({ contacts: array3 });
				return null;
			}
		}
	};
};

export default getState;
