import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./main.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="main">
			<h1>Vite 3.1 & React 18.2 & Typescript 4.8 & CSS Nesting</h1>
			<div className="counter">
				<button onClick={() => setCount((count) => count - 1)}>
					-
				</button>
				<span> {count} </span>
				<button onClick={() => setCount((count) => count + 1)}>
					+
				</button>
			</div>
			<p className="nesting-test">
				If this is green, CSS nesting works.{" "}
			</p>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
