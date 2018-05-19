import React from 'react';
import './Button.css';

function Button(props) {
	return (
		<button className="mainButton">
			<span className={props.icon}>
				<p>{props.value}</p>
			</span>
		</button>
	);
}

export default Button;