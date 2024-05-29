const people = [
	'Creola Katherine Johnson: mathematician',
	'Mario José Molina-Pasquel Henríquez: chemist',
	'Mohammad Abdus Salam: physicist',
	'Percy Lavon Julian: chemist',
	'Subrahmanyan Chandrasekhar: astrophysicist'
];

// MAP
/*
	for (var i = 0; i < people.length; i++){
		console.log(people[i]);
	}
*/
export function ListPeople() {
	const list = people.map((e) => <li key={e}>{e}</li>);
	return <ul>{list}</ul>;
}

export function ListPeople2() {
	return (
		<ul>
			{
				people.map((e) => <li key={e}>{e}</li>)
			}
		</ul>
	);
}

