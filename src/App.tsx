import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Counter2 from './Counter2';
import { useAtomValue } from 'jotai';
import { counterAtom } from './state';

function App() {
  const [hasCounter, setHasCounter] = useState(true);
  const [hasCounter2, setHasCounter2] = useState(true);
  const globalCount = useAtomValue(counterAtom);

  return (
    <>
      <div className="card">
        Global count: {globalCount}
      </div>
      <div className="card">
        {hasCounter && <Counter />}
        <button onClick={() => setHasCounter(p => !p)}>Toggle Counter</button>
      </div>
      <div className="card">
        {hasCounter2 && <Counter2 />}
        <button onClick={() => setHasCounter2(p => !p)}>Toggle Counter2</button>
      </div>
    </>
  )
}

export default App
