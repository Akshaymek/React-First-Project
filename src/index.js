import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = (a, b) => {
    alert(a.GoalStatus+" On "+b.type+" Event");
  }
  return (
    <>
    <button onClick={(event) => shoot({GoalStatus:"Goal" , KickSide:"Left"} , event)}>shot Left!</button>
    <button onClick={(event) => shoot({GoalStatus:"No Goal" , KickSide:"Right"}, event)}>shot Right!</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Football />);