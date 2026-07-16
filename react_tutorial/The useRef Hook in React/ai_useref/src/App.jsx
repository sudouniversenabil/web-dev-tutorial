import { useRef, useState } from 'react';

function BackgroundCounter() {
  // Ref toiri kora holo, initial value deya holo 0
  const clickCount = useRef(0);
  
  // Eita just component re-render korar jonno ekta dummy state
  const [render, setRender] = useState(0); 

  const handleRefClick = () => {
    // Ref-er value update kora hocche (eta component ke re-render korbe na)
    clickCount.current = clickCount.current + 1;
    console.log("Ref e click kora hoyeche:", clickCount.current, "bar");
  };

  return (
    <div>
      <p>Console open kore check korun!</p>
      <button onClick={handleRefClick}>Click Me (Ref Update)</button>
      
      {/* Nicher button ta click korle component re-render hobe, tokhon screen e latest ref value dekhabe */}
      <button onClick={() => setRender(render + 1)}>Force Render</button>
      
      <p>Ref-er present value: {clickCount.current}</p>
    </div>
  );
}

export default BackgroundCounter;