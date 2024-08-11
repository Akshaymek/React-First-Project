import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './components/Car';

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Garage />);