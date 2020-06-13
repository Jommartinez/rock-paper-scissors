import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const RulesStyled = styled.div`
	text-align: center;
	&::before {
		content: "";
		display: block;
		position: absolute;
		z-index: 2;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.6);
	}
	.close-button {
		margin-top: 2em;
		cursor: pointer;
	}
	.rules-modal {
		background: white;
		padding: 4em 0;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		h2 {
			color: #3b4262;
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: -2px;
			margin-bottom: 1em;
		}
	}
`;

function Rules() {
	const [visible, setVisible] = useState(false);
	function handleClick() {
		console.log("click");
	}
	return (
		<RulesStyled visible={visible}>
			<div className="rules-modal">
				<h2>Rules</h2>
				<img src="./images/image-rules.svg" alt="Game Rules" />
			</div>

			<Button onClick={handleClick} className="button">
				Rules
			</Button>
		</RulesStyled>
	);
}

export default Rules;
