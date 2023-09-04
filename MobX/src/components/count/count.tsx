import { observer } from "mobx-react-lite";
import counterStore from "../../stores/counter-store";

const Count = observer(() => {

    const {total, count, increment, decrement} = counterStore;
    return ( 
        <>
        
        <button onClick={()=>increment(1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>decrement(1)}>-</button>
        <span>{total}</span>
        </>
     );
});
 
export default Count;