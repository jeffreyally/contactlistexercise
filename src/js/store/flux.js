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
				const actions = getActions();
				console.log("right here", actions);
				let array3 = store.contacts.concat([newcontact]);
				console.log(array3);
				actions.postAContact();
				setStore({ contacts: array3 });
				return null;
			},

			postAContact: () => {
				let sample = {
					full_name: "Dave Bradley",
					email: "GFSGBSFGRHGWRE$TRGRGRE@gmail.com",
					agenda_slug: "IWantANiceCodeBeer",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(sample), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) console.log(response);
					})
					.catch(e => console.log(e, " THE ERROR"));
			}
		}
	};
};

export default getState;
