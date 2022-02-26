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
			deleteRequestAPI: IdOfContact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + IdOfContact, {
					method: "DELETE"
				}).then(response => {
					if (response.ok) console.log(response);
				});
			},
			addToStoreContacts: newcontact => {
				console.log(newcontact);
				const store = getStore();
				const actions = getActions();
				//console.log( actions);
				let array3 = store.contacts.concat(newcontact);
				//console.log(array3);
				actions.postAContact(newcontact);

				setStore({ contacts: array3 });
				return null;
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
							return response;
						}
					})
					.catch(e => console.log(e, " THE ERROR"));
			},
			addEditedContactToStoreContacts: EditContactObject => {
				var ID;
				console.log(EditContactObject);
				console.log(EditContactObject[0].id);
				EditContactObject.map((item, index) => {
					ID = item.id;
				});
				//console.log(ID);
				const store = getStore();
				const actions = getActions();
				let contactcheck = store.contacts.filter((contact, index) => {
					return contact.id != ID;
				});

				let finaledit = contactcheck.concat(EditContactObject);
				console.log(finaledit);
				actions.updateOneContact(EditContactObject);
				setStore({ contacts: finaledit });
			},

			updateOneContact: EditContactObject => {
				let sample = {
					full_name: EditContactObject[0].full_name,
					email: EditContactObject[0].email,
					agenda_slug: "IWantANiceCodeBeer",
					address: EditContactObject[0].address,
					phone: EditContactObject[0].phone
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
							return response;
						}
					})
					.catch(e => console.log(e, " THE ERROR"));
			}
		}
	};
};

export default getState;
