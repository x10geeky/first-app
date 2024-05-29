import { useState } from "react";

const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
}, {
  name: 'Floralis Genérica',
}, {
  name: 'Eternal Presence',
}, {
  name: 'Moai',
}, {
  name: 'Blue Nana',
}, {
  name: 'Ultimate Form',
}];

export function Gallery() {
	const [index, setIndex] = useState(0);
	function onClick() {
		setIndex(index + 1);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			<p>
				{sculpture.name}
			</p>
			<button onClick={onClick}>Next</button>
		</>
	)
}
