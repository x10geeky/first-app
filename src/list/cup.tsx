let guest = 0;

function Cup(){
	guest = guest + 1;
	console.log(guest);
	return <h2>Tea cup for guest #{guest}</h2>
}

export function TeaSet() {
	return (
		<>
			<Cup />
			<Cup />
			<Cup />
		</>
	)
}

interface Props{
	guest: number;
}

function Cup2({guest}: Props) {
	return <h2>Tea cup for guest #{guest}</h2>
}

export function TeaSet2() {
	return (
		<>
			<Cup2 guest={1} />
			<Cup2 guest={2} />
			<Cup2 guest={3} />
		</>
	)
}

export function TeaSet3() {
	let cups = [];
	for (let i = 1; i <= 12; i++){
		cups.push(<Cup2 key={i} guest={i}/>);
	}
	return <div>{cups}</div>;
}