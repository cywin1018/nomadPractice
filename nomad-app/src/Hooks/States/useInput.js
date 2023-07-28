import UseTabHook from "./Hooks/States/useTabs";
import {useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

const useInput = (initialValue,validator)=>{
    const [value,setValue] = useState(initialValue);
    const onChange = e =>{
        const {
            target : {value}
        } = e;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return {value,onChange};
}
export default function UseInputHook () {
    const maxLen = value => (!value.includes("@")&&value.length <=10);
    const name = useInput("Mr.",maxLen)
    return(
        <div>
            <h1>hello</h1>
            <input placeholder={"Name"} {...name} />
        </div>
    )
}


