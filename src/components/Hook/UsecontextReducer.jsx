import React,{useContext} from 'react'
import { Num } from '../../App'; 

function CRhook()  {
    const number = useContext(Num)
    return(
        <div>
            <button onClick={() =>number.countDispatch('increment')}>Increment</button>
            <button onClick={() =>number.countDispatch('reset')}>Reset</button>
            <button onClick={() =>number.countDispatch('decrement')}>Decrement</button>
        </div>
    );
}

export default CRhook