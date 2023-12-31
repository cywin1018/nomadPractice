import UseTabHook from "./Hooks/States/useTabs";
import {useEffect, useRef, useState} from "react";
const useClick = (onClick)=>{

    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("click",onClick);
        }
        return ()=>{
            if(element.current){
                element.current.removeEventListener("click",onClick);
            }
        }
    }, [onClick]);

    return element;
}

export default function UseClick () {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return(
        <>
            <h1 ref={title}>HI</h1>
        </>
    )
}


