function className() {
	return (<div className="App">THIS IS CONTENT</div>);
}

function label() {
	return (
    <>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label htmlFor="vehicle1"> I have a bike</label>
    </>
  );
}

function expression() {
	return (
    <button onClick={() => { }}>
    </button>
  );
}

function ternaryOperationCheck() {
	const b = false;
  return <div>{ b? 'this is true' : 'this is false' }</div>
}

function bracesOperationCheck() {
	const showMsg = false;
  const msg = 'Hello World!';
  return <div>{showMsg && msg}</div>
}

function bracesOperation() {
	return (
		<>
			<div>Result of 2+2 = {2 + 2}</div>
			<div>Result of 2-2 = {2 - 2}</div>
			<div>Result of 2*2 = {2 * 2}</div>
			<div>Result of 2/2 = {2 / 2}</div>
		</>
	);
}