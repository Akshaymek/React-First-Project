import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("Snidhe");//set textbox inital value as Snidhe 

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}          
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<MyForm />);