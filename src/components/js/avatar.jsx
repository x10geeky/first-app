export function Avatar({size, title}) {
	return (
		<>
			{title}
			<img className="" src={`https://picsum.photos/${size}/${size}`} width={size} height={size} />
		</>
	);
}