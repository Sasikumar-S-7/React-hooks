import React, { useCallback, useState} from 'react';

const ButtonWithCallback = ({ onClickCallback }) => {

  const handleClick = () => {
    onClickCallback("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

const ParentComponent = () => {
  const [message, setMessage] = useState("");
  const [count,setCount]=useState(0)

  const handleButtonClick =useCallback((msg) => {
    console.log("mythili");
    setMessage(msg);
  },[message]); 

  const handler =()=>{
   
    setCount(count+1);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <ButtonWithCallback onClickCallback={handleButtonClick} />
      <p>{message}</p>
      <button onClick={handler}>click</button>
      <p>{count}</p>
    </div>
  );
};

export default ParentComponent;
