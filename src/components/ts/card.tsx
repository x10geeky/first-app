import { ReactNode } from 'react';

interface Props {
  // any
  color: string;
  children: ReactNode;
}

export function CardA({ children, color }: Props) {
  return <div style={{ backgroundColor: color, padding: 12 }}>{children}</div>;
}

export function CardB(props: Props) {
  return <div style={{ backgroundColor: props.color, padding: 12 }}>{props.children}</div>;
}

export function CardC(props: Props) {
  const { children, color } = props;
  return <div style={{ backgroundColor: color, padding: 12 }}>{children}</div>;
}
/*
return <>

    <CardA color={'pink'}>
      <Avatar size={200} title={<WelcomeArrow />} />
    </CardA>
    <CardA color='yellow'>
      <h1>Hello</h1>
    </CardA>
  </>
*/
