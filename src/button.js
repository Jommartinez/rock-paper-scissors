import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
	font-size: 1em;
	letter-spacing: 2.5px;
	display: inline-flex;
	border: 1px solid white;
	border-radius: 5px;
	min-width: 128px;
	padding: 1em;
	box-sizing: border-box;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
`;

function Button({ children, ...props }) {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
export default Button;
