import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

function MyApp() {
	return (
		<div>
			<h1>Hello, UI DEV Team!</h1>
		</div>
	)
}

/* const NewElement = {
	type: 'a',
	props: {
		href: 'https://www.google.com',
		target: '_blank'
	},
	children: 'new Link to be tested'
} */

const anotherElement = ( 
	<a href="https://goofle.com" target="_blank"> Visit Google</a>
)

const NewElement = React.createElement(
	'a',
	{href:'https://google.com',target: '_blank'},
	'Visit Google'
)


createRoot(document.getElementById("root")).render(
	
	NewElement

);
