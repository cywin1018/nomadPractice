import React, {useState} from "react";
import {dbService, storageService} from "../fBase";

const Nweet = ({nweetObj,isOwner}) =>{
    const [editing,setEditing] = useState(false);
    const [newNweet,setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () =>{
        const ok = window.confirm("Are you sure?");
        console.log(ok);
        if(ok){
            await  dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        }
    }
    const toggleEditing = () => setEditing((prev)=> !prev);
    const onSubmit =async (e) =>{
        e.preventDefault();
        console.log(nweetObj,newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text:newNweet
        });
        setEditing(false);
    }
    const onChange = (e)=>{
        const{
            target:{value},
        } = e;
        setNewNweet(value)
    }
    return (
        <div >
            {editing ? (
               <>
                   <form onSubmit={onSubmit}>
                       <input onChange={onChange} type={"text"} placeholder={"Edit your Nweet!"} value={newNweet}  required />
                        <input type={"submit"} value={"Update Nweet"}/>
                   </form>
                   <button onClick={toggleEditing}>cancel</button>
               </>
            ) :(
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl&&<img src={nweetObj.attachmentUrl} width={"50px"} height={"50px"}/> }
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )

                    }
                </>
            )}
        </div>
    )
}

export default Nweet