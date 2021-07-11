import React from 'react'
import './scss/form.scss'

import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./redux/actions";

export default function Form({socket}) {

    const dispatch = useDispatch(); 
    const {username, message} = useSelector(state=> state.inputs);
    

    

    const handleChange = (e)=>{
        
        const {name, value} = e.target ; 
        dispatch(setInput(name, value))
        
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        await socket.emit('chat',{
            sender: username,
            message
        })

        dispatch(setInput('message',''))
    }

    return (
        <form className="form">
            <input type="text" name="username" id="" placeholder="Username" onChange={handleChange} value={username}/>
            <input type="text" name="message" id="" placeholder="Message" onChange={handleChange} value={message}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
