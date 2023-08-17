import React, { useState} from "react";
import {authService} from "../fBase";
import {useHistory} from "react-router-dom";

export default ({refreshUser,userObj})=>{
    const history = useHistory();
    const [newDisplayName,setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
      let a =  authService.signOut();

        history.push("/");
    }
    const onChange = (e) =>{
        const{
            target:{value},
        } = e;
        setNewDisplayName(value);
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    }
    // const getMyNweets = async () =>{
    //     const nweets =
    //         await dbService.collection("nweets")
    //             .where("creatorId","==",userObj.uid)
    //             .orderBy("createdAt","desc")
    //             .get();
    //     console.log(nweets.docs.map((doc)=> doc.data()))
    // }
    // useEffect(() => {
    //     getMyNweets();
    // }, []);
    return (<>
        <form onSubmit={onSubmit}>
            <input onChange={onChange}
                   type={"text"} placeholder={"Display name"}
            value={newDisplayName}/>
            <input type={"submit"} value={"Update Profile"}/>
        </form>
       <button onClick={onLogOutClick}>Log Out</button>

    </>)
}