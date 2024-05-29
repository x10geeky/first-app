interface Props{
	name: string;
	isPacked: boolean;
}

function Item({name, isPacked}:Props) {
	if (isPacked) {
		return <li>{name} ✔</li>
	}
	return <li>{name}</li>
}

export function PackingList() {
	return (
		<section>
			<ul>
				<Item name="สมชาย" isPacked={true} />
				<Item name="สมหญิง" isPacked={false} />
				<Item name="กัญญา" isPacked={true} />
			</ul>
		</section>
	);
}

export function PackingList2() {
	const people = [
		{ name: 'สมชาย', isPacked: true}, 
		{ name: 'สมหญิง', isPacked: false}, 
		{ name: 'กัญญา', isPacked: false}, 
	];

	const list = people.map((e) => <Item key={e.name} name={e.name} isPacked={e.isPacked} />)

	return (
		<section>
			<ul>{list}</ul>
		</section>
	)
}