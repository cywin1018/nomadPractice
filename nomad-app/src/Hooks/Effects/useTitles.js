import UseTabHook from "./Hooks/States/useTabs";
import {useEffect, useState} from "react";

const useTitle = initialTitle =>{
    const [title,setTitle] = useState(initialTitle);
    const updateTitle =()=>{
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(() => {
        updateTitle()
    }, [title]);
    return setTitle;
}

export default function UseTitle () {
    const titleUpdater = useTitle("Loading...");
    setTimeout(()=>titleUpdater("home"),800)
    return(
        <>

        </>
    )
}


