import React from 'react';
import { render } from 'react-dom';
import Clock from 'react-clock';

function tick(props) {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  render(
    element,
    document.getElementById('root2')
  );
}

setInterval(tick, 1000);




export default function Digital() {
    return (
        <div>
            
        </div>
    )
}









