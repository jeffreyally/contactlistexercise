import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Link } from "react-router-dom";

export const ContactCard = ({
	contactObject,
	indexfrommap,
	onDelete,
	setIndexOfContactToBeDeleted,
	IndexOfContactToBeDeleted,
	setIdOfContact,
	contactID
}) => {
	const [state, setState] = useState({
		//initialize state here
	});

	var deleteAndSetID = indexfrommap => {
		onDelete();
		//setIndexOfContactToBeDeleted(indexfrommap);
		setIdOfContact(contactID);
	};

	return (
		<li className="list-group-item" id={indexfrommap}>
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						{/* don't forget the syntax below */}
						<Link to={{ pathname: "/edit", state: { contactObject } }}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button className="btn" onClick={() => deleteAndSetID(indexfrommap)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{contactObject.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{contactObject.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{contactObject.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{contactObject.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	setIndexOfContactToBeDeleted: PropTypes.func,
	indexfrommap: PropTypes.number,
	IndexOfContactToBeDeleted: PropTypes.number,
	contactObject: PropTypes.object,
	//below is a number but it's in the form of a string
	contactID: PropTypes.string,
	setIdOfContact: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
// setID(id)
//
