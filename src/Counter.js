import React,{ useState } from 'react'

 function Counter() {

    const [count, setCount] = useState(0);

    return(

    <div>
    <h3>Counter app using state/hooks: Counter Value {count}</h3>
            <button className="button" onClick={()=>(count>10?"Cant exceed 11" : setCount( count+1))}>Increment</button>
            <button className="button" onClick={()=>(count<1?"cat be negative" : setCount( count-1))}>Decrement</button>
            <button className="button" onClick={()=>setCount(0)}>Reset</button>
            <br/>
    </div>
)}

export default Counter;