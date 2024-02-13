import { useAtom, Provider } from "jotai"
import { useStore } from "jotai/react";
import { FunctionComponent } from "react";
import { counterAtom } from "./state";
import { getDefaultStore } from "jotai/vanilla";


const Counter2 = wrap(function Counter() {
  const [count, setCount] = useAtom(counterAtom, { store: useStore() });
  const [globalCount, setGlobalCount] = useAtom(counterAtom, { store: getDefaultStore() });

  return (
    <div>
      <div>useStore instead of explicit store</div>
      <div>local count: {count}</div>
      <div>global count: {globalCount}</div>
      <button onClick={() => {
        setCount(c => c + 1);
        setGlobalCount(c => c + 1);
      }}>
        +
      </button>
      <button onClick={() => {
        setCount(c => c - 1);
        setGlobalCount(c => c - 1);
      }}>
        -
      </button>
    </div>
  )
});

export default Counter2;

function wrap(Component: FunctionComponent) {
  return () => <Provider><Component /></Provider>
}
