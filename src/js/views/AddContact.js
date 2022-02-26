import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contactObject, setcontactObject] = useState({ full_name: "", email: "", phone: "", address: "" });
	const [full_name, setfull_name] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

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
							placeholder="Full Name"
							onChange={(
								e //setcontactObject({ ...contactObject, full_name: event.target.value })
							) => {
								setfull_name(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(
								e //setcontactObject({ ...contactObject, email: event.target.value })
							) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={(
								e //setcontactObject({ ...contactObject, phone: event.target.value })
							) => {
								setPhone(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={(
								e //setcontactObject({ ...contactObject, address: event.target.value })
							) => {
								setAddress(e.target.value);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							setcontactObject({
								full_name: full_name,
								email: email,
								phone: phone,
								address: address
							}).then(() => actions.addToStoreContacts(contactObject));
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
