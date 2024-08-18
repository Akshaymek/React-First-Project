import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");//take first option if ""
  const handleChange = (event) => {
      setMyCar(event.target.value)
      alert("car:"+myCar);
  }
  return (
      <form>
      <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
      </select>
      </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<MyForm />);