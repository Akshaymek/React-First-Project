import React from 'react';
import ReactDOM from 'react-dom/client';


function Car(props) {
  return <li>I am a { props.brand } &nbsp; owner:<strong>{props.owner}</strong></li>;
}

function Garage(){
  const cars=['BMW','FORD','AUDI'];
  console.log('cars:', cars);
  return(
    <>
    <h1>LIST OF CARS</h1>
    <ul>
    {cars.map((car, index) => (
          <Car key={index} brand={car} owner ='JOHN' />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Garage />);