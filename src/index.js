import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import myStyle from './my-style.module.css';
const Header = () => {
  const BlackYellow = {
    color: "Black",
    backgroundColor:"Yellow"
  };
  return (
    <>
      <h1 style={{backgroundColor:"green" , color:"white"}}>INLINE CSS </h1>
      <h1 style={BlackYellow}>SAME FILE</h1>
      <h1 className='bigblue'> APP STYLE</h1> {/*  FORM App.css*/}
      <h1 className={myStyle.bigRed}>CSS MODULE STYLE </h1> {/*  FORM MODULE FILE*/}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);