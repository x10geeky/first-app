import React, { ReactNode, useState } from 'react';

export default function LiftingPage() {
  return (
    <div>
      <h2>Lifting</h2>
      <MyApp />
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h4>Accordion</h4>
      <PanelAccordion title="About" isActive={activeIndex == 0} onShow={() => setActiveIndex(0)}>
        Do id est sunt proident eiusmod aliqua fugiat quis velit enim ut magna aute occaecat.
      </PanelAccordion>
      <PanelAccordion title="Contact" isActive={activeIndex == 1} onShow={() => setActiveIndex(1)}>
        Consectetur consectetur non consequat ad nulla consequat esse et est minim voluptate.
      </PanelAccordion>
    </div>
  );
}

interface PropsAccordion {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
}

function PanelAccordion({ title, children, isActive, onShow }: PropsAccordion) {
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

function Expanded() {
  return (
    <div>
      <h2>Expanded</h2>
      <PanelExpanded title="About">Tempor magna commodo irure ipsum sit est laborum. </PanelExpanded>
      <PanelExpanded title="Contact">Proident consequat nisi reprehenderit cupidatat officia laboris irure voluptate anim.</PanelExpanded>
    </div>
  );
}

interface Props {
  title: string;
  children: ReactNode;
}
function PanelExpanded({ title, children }: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Show</button>}
    </section>
  );
}

/* TEST */
function MyApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MyButton count={count} onPlus={() => setCount((prev) => prev + 1)} />
      <MyButton count={count} onPlus={() => setCount((prev) => prev + 1)} />
    </div>
  );
}

interface PropsButton {
  count: number;
  onPlus: () => void;
}

function MyButton({ count, onPlus }: PropsButton) {
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={onPlus}>Plus</button>
    </div>
  );
}
