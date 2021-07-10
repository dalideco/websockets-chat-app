import React from 'react'
import './scss/form.scss'

import { useDispatch, useSelector } from "react-redux";
import { setInput, addMessage } from "./redux/actions";

export default function Form() {

    const dispatch = useDispatch(); 
    const {username, message} = useSelector(state=> state.inputs);
    const state = useSelector(state=> state);

    

    const handleChange = (e)=>{
        
        const {name, value} = e.target ; 
        dispatch(setInput(name, value))
        
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(username, message);
        await dispatch(addMessage(username, message));
        console.log(state)
    }

    return (
        <form className="form">
            <input type="text" name="username" id="" placeholder="Username" onChange={handleChange} value={username}/>
            <input type="text" name="message" id="" placeholder="Message" onChange={handleChange} value={message}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
