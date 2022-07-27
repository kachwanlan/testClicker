import { useState } from 'react';
import Button from './components/button';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(()=>(count + 1));
  }

  return (
    <div>
      
      <Button count = {count} onClick = {incrementCount} />
    </div>
  );
}

export default App;
