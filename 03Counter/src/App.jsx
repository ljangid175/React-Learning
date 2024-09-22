import { useState } from "react";
import "./App.css";

function App() {

    const [counterValue, setCounterValue] = useState(5)

	const addValue = () => {
        counterValue === 20 ? window.alert('Youve reached the highest value') : setCounterValue(counterValue + 1);
	};
    const subValue = () => {
        counterValue !== 0 ? setCounterValue(counterValue - 1) : window.alert("Can't reduce the value below this");
	};

	return (
		<>
			<h1>React</h1>
			<h2>Counter value: {counterValue}</h2>
			<button onClick= {addValue}>Add Value</button>
			<br />
			<br />
			<button onClick={subValue}>Substract Value</button>
		</>
	);
}

export default App;
