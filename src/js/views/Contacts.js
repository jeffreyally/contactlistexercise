import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
//Your API URL: "https://assets.breatheco.de/apis/fake/contact/agenda/IWantANiceCodeBeer"
export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const [IndexOfContactToBeDeleted, setIndexOfContactToBeDeleted] = useState(null);
	const [IdOfContact, setIdOfContact] = useState(null);

	const { store, actions } = useContext(Context);
	//console.log(store.contacts);
	// store.contacts.map(contact => {
	// 	console.log(contact);
	// });

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, indexfrommap) => {
							//ID in each object, maybe pass as props?

							return (
								<ContactCard
									onDelete={() => setState({ showModal: true })}
									contactObject={contact}
									key={indexfrommap}
									indexfrommap={indexfrommap}
									setIndexOfContactToBeDeleted={setIndexOfContactToBeDeleted}
									IndexOfContactToBeDeleted={IndexOfContactToBeDeleted}
									contactID={contact.id}
									setIdOfContact={setIdOfContact}
								/>
							);
						})}
					</ul>
				</div>
				{/*the idea below failed but you kept it because the functionality might still be
				helpful */}
				<Modal
					show={state.showModal}
					onClose={() => setState({ showModal: false })}
					IndexOfContactToBeDeleted={IndexOfContactToBeDeleted}
					IdOfContact={IdOfContact}
				/>
			</div>
		</div>
	);
};

let holdit = `{store.contacts.map((contact, index) => {
	<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={index} />;
})}`;
