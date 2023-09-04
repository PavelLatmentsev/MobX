// import { observer } from "mobx-react-lite";
// import counterStore from "../../stores/counter-store";

// const Count = observer(() => {

//     const {total, count, increment, decrement} = counterStore; // так при экспорте стора в виде инстанса.
//     return ( 
//         <>
        
//         <button onClick={()=>increment(5)}>+</button>
//         <span>{count}</span>
//         <button onClick={()=>decrement(5)}>-</button>
//         <span>{total}</span>
//         </>
//      );
// });
 
// export default Count;


//-----------------------------------верхний вариант в виде инстанса.-----------------------------

interface IProps {
    increment:(value:number) => void;
    decrement:(value:number) => void;
    count:number;
    total:number;
}

const Count = ({total, count, increment, decrement}: IProps) => {
    return ( 
        <>
        
        <button onClick={()=>increment(5)}>+</button>
        <span>{count}</span>
        <button onClick={()=>decrement(5)}>-</button>
        <span>{total}</span>
        </>
     );
};
 
export default Count;