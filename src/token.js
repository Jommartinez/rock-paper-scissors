import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
	width: 130px;
	height: 125px;
	box-sizing: border-box;
	border-radius: 50%;
	border: 16px solid ${({ color }) => color.base};
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	box-shadow: 0 5px 0 ${({ color }) => color.border};
	position: relative;
	z-index: 2;
	cursor: pointer;
	&:active {
		transform: scale(0.9);
	}
	.box {
		box-shadow: 0 -4px 0 #babfd4;
		align-self: stretch;
		flex: 1;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const colors = {
	paper: {
		base: "#516ef4",
		border: "#2543c3",
	},
	rock: {
		base: "#de3a5a",
		border: "#980e31",
	},
	scissors: {
		base: "#eca81e",
		border: "#c76c14",
	},
	default: {
		base: "trasparent",
		border: "trasparent",
	},
};

function Token({ name }) {
	return (
		<TokenStyled color={colors[name]}>
			<div className="box">
				<img src={`./images/icon-${name}.svg`} alt={`icon ${name}`} />
			</div>
		</TokenStyled>
	);
}
export default Token;
