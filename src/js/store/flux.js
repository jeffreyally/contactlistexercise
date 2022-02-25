const getState = ({ getStore, setStore }) => {
	//your agenda slug name: IWantANiceCodeBeer
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
					.catch(error => console.log("Error:", error))
		}
	};
};

export default getState;
