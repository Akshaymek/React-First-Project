import React from 'react';
import ReactDOM from 'react-dom/client';
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <>
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
          <h4>
            First Car is <strong>{cars[0]}</strong>
          </h4>
        </>
      }
    </>
  );
}

const cars = ['BMW', 'FORD'];
const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Garage cars={cars} />);