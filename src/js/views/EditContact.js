import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
//will be similar to addcontact view
export const EditContact = props => {
	console.log(props.location.state.email);
	console.log(typeof props.location.state.email);

	const [EditContactObject, setEditContactObject] = useState({
		full_name: props.location.state.full_name,
		email: props.location.state.email,
		phone: props.location.state.phone,
		address: props.location.state.address,
		agenda_slug: "IWantANiceCodeBeer",
		id: props.location.state.id
	});

	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={props.location.state.full_name}
							onChange={e => {
								setEditContactObject({ ...EditContactObject, full_name: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="meh"
							onChange={e => {
								setEditContactObject({ ...EditContactObject, email: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder={props.location.state.phone}
							onChange={e => {
								setEditContactObject({ ...EditContactObject, phone: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="add"
							onChange={e => {
								setEditContactObject({ ...EditContactObject, address: e.target.value });
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addToStoreContacts(EditContactObject);
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	props: PropTypes.object,
	location: PropTypes.object,
	state: PropTypes.object
};
