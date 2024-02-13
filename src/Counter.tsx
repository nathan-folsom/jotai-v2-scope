import { Provider, useAtom } from "jotai"
import { createStore } from "jotai/vanilla";
import { FunctionComponent } from "react";
import { counterAtom } from "./state";

const counterStore = createStore();

const Counter = wrap(function Counter() {
  const [count, setCount] = useAtom(counterAtom, { store: counterStore });
  const [globalCount, setGlobalCount] = useAtom(counterAtom);

  return (
    <div>
      <div>Explicit store passed to provider</div>
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
}, counterStore);

export default Counter;


function wrap(Component: FunctionComponent, store: ReturnType<typeof createStore>) {
  return () => <Provider store={store}><Component /></Provider>
}
