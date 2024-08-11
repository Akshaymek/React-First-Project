import React from 'react';
import ReactDOM from 'react-dom/client';
function Goal(props) {
  let isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('MyRootDiv'));
root.render(<Goal isGoal ={true}/>);