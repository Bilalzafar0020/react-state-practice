import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

const Color = () => {
  const [isLit, setLit] = useState(true);

  const toggleBackground = () => {
    setLit(!isLit);
  }

  const bodyStyle = {
    background: isLit ? 'white' : 'black'
  };

  return (
    <div style={bodyStyle}className="main">
      <button onClick={toggleBackground} className="button">Click</button>
    </div>
  );
}

ReactDOM.render(<Color />, document.querySelector("#root"));
