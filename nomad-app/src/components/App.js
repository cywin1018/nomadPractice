import AppRouter from "./Router";
import {useEffect, useState} from "react";
import {authService} from "../fBase";
export default function App () {
    const [init,setInit] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userObj,setUserObj] =useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user)=>{
            if(user){
                setUserObj({
                    displayName:user.displayName,
                    uid:user.uid,
                    updateProfile:(args)=>user.updateProfile(args),
                })
            }
            setInit(true);
        });
    }, []);
    const refreshUser = () =>{
        const user = authService.currentUser;
        setUserObj({
            displayName:user.displayName,
            uid:user.uid,
            updateProfile:(args)=>user.updateProfile(args),
        });
    }

    return(
     <>
         {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}
         />: "Initializing...."}
         {/*<footer>&copy; {new Date().getFullYear()} Nwitter</footer>*/}
     </>

  )
}


