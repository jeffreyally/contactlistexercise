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
							console.log(response);
						}
						//console.log(response);
						return response.json();
					})
					.then(responseJSON => {
						console.log(responseJSON);
						setStore({ contacts: responseJSON });
					})
					.catch(error => console.log("Error:", error)),

			deleteRequestAPI: IdOfContact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + IdOfContact, {
					method: "DELETE"
				}).then(response => {
					if (response.ok) console.log(response);
					var actions = getActions();
					actions.loadcharacters();
				});
			},

			postAContact: newcontact => {
				console.log(newcontact);
				let sample = {
					full_name: newcontact[0].full_name,
					email: newcontact[0].email,
					agenda_slug: "IWantANiceCodeBeer",
					address: newcontact[0].address,
					phone: newcontact[0].phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(sample), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							console.log(response);
							const actions = getActions();

							console.log("testing");
							actions.loadcharacters();

							return response;
						}
					})
					.catch(e => console.log(e, " THE ERROR"));
				const actions = getActions();

				console.log("testing");
				actions.loadcharacters();

				console.log("testing");
			},

			updateOneContact: EditContactObject => {
				let sample = {
					full_name: EditContactObject[0].full_name,
					email: EditContactObject[0].email,
					agenda_slug: "IWantANiceCodeBeer",
					address: EditContactObject[0].address,
					phone: EditContactObject[0].phone,
					id: EditContactObject[0].id
				};
				console.log(EditContactObject);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + EditContactObject[0].id, {
					method: "PUT",
					body: JSON.stringify(sample), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							console.log(response);
							var actions = getActions();
							actions.loadcharacters();
							return response;
						}
					})
					.catch(e => console.log(e, " THE ERROR"));
			}
		}
	};
};

export default getState;
