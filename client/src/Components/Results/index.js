import React from "react";

export function Results({ children }) {
	return (
		<div className="results-overflow-container">
			<ul className="results-group">{children}</ul>
		</div>
	);
}
export function resultsIrem({ children }) {
	return <li className="results-group-item">{children}</li>;
}