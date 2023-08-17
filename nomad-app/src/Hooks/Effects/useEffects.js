import UseTabHook from "./Hooks/States/useTabs";
import {useEffect, useState} from "react";


export default function UseEffectsHook () {
    const sayHello = ()=>console.log("hello");
    const [number,setNumber] =useState(0);
    const [aNumber,setAnumber] = useState(0);
    useEffect(() => {
        sayHello();
    }, [number]);
    return(
        <div>
            <button onClick={()=>setNumber(number+1)}>{number}</button>
            <button onClick={()=>setAnumber(aNumber-1)}>{aNumber}</button>
        </div>
    )
}


