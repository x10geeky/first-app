export function Card({children, color}) {
	return (
		<div style={{ backgroundColor: color, padding: 12 }}>
			{children}
		</div>
	);
}