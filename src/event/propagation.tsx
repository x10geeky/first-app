import { ReactNode } from "react";

export function Toolbar() {
	return (
		<div onClick={() => alert('You clicked on the toolbar!')} style={{backgroundColor: 'red', padding: 4}}>
			<Button onClick={() => alert('Playing!')}>Play Movie</Button>
			<Button onClick={() => alert('Uploading!')}>Upload Image</Button>
		</div>
	);
}

interface Props{
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	children: ReactNode;
}

function Button({onClick, children}: Props){
	return (
		<button onClick={(e) => {
			if (onClick) {
				e.stopPropagation();
				onClick(e);
			}
		}}>{children}</button>
	)
}