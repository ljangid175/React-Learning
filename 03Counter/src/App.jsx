import { useState } from "react";
import "./App.css";

function App() {

    const [counterValue, setCounterValue] = useState(5)

	const addValue = () => {
        setCounterValue(counterValue + 1);
	};
    const subValue = () => {
        counterValue !== 0 ? setCounterValue(counterValue - 1) : window.alert('oyye thamja kakke');
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
