import { observer } from "mobx-react-lite";
import Count from "../count/count";
import CounterStore from "../../stores/counter-store";


const counter1 = new CounterStore();
const counter2 = new CounterStore();
export const Wrapper = observer(() => {
  return (
    <>
      <Count {...counter1} total={counter1.total}/>
      <Count {...counter2} total={counter2.total}/>
    </>
  );
});

export default Wrapper;
