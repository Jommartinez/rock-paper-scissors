import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
	width: 130px;
	height: 130px;
	box-sizing: border-box;
	border-radius: 50%;
	border: 16px solid #516ef4;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	box-shadow: 0 5px 0 #2543c3;
	cursor: pointer;
	&:active {
		transform: scale(0.9);
	}
	.box {
		box-shadow: 0 -5px 0 #bcc1d5;
		align-self: stretch;
		flex: 1;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

function Token({ name }) {
	return (
		<TokenStyled>
			<div className="box">
				<img src={`./images/icon-${name}.svg`} alt={`icon ${name}`} />
			</div>
		</TokenStyled>
	);
}
export default Token;
