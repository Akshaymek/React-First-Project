import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'BMW' }, { id: 1, brand: 'FORD' }, { id: 1, brand: 'AUDI' }
  ];
  console.log('cars:', cars);
  return (
    <>
      <h1>LIST OF CARS</h1>
      <ul>
        {cars.map((car) => <Car  brand={car.brand} />)}
      </ul>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Garage />);