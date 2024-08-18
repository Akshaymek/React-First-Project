import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>INLINE CSS </h1>
      <h2>CSS STYLESHEET : EXTERNAL TEXT</h2>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);