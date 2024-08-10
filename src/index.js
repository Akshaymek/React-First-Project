import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
    <button className='classbtn'>AKSHAY</button>
  </>
);

const container = document.getElementById('MyRootDiv');
const root = ReactDOM.createRoot(container);
root.render(myElement);