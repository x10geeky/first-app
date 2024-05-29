export function Button() {

	function onClickMe() {
		console.log("Clicked!!");
	}

	let onClickMe1 = () => {
		console.log("Clicked!! 1");
	}
	
	return (
		<>
			<button onClick={onClickMe}>Click Me</button>
			<button onClick={onClickMe1}>Click Me1</button>

			<button onClick={() => console.log('Clicked!! 2')}>Click Me 2</button>
			<button onClick={() => {
				console.log('Clicked!! 3 Line 1');
				console.log('Clicked!! 3 Line 2');
			 }}>Click Me 3</button>
			<button onClick={function () { console.log('Clicked!! 4'); }}>Click Me 4</button>

			<button onClick={() => alert('Notification')}>Notification</button>
		</>
	);
}