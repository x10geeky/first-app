import { useState } from "react";

export function Count() {
	const [count, setCount] = useState(1)

	return (
		<>
			<h1>Gallery #{count}</h1>
			<button onClick={() => {
				setCount(count + 1);
			 }}>+</button>
		</>
	);
}