import React from 'react'
import './scss/text.scss';

import { useSelector } from "react-redux";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { addMessage } from "./redux/actions";




export default function Text({socket}) {


    const dispatch = useDispatch()
    const fakeData = useSelector(state=> state.messages);
    const {username } = useSelector(state=> state.inputs)

    useEffect(()=>{
        socket.on('message', data=>{
            dispatch(addMessage(data.sender, data.message))
        })
        // eslint-disable-next-line
    },[])

    return (
        <div className="text">
            {fakeData.map((data,index)=>(
                <div className="message" key={index}>
                    <div className={`cadre ${(data.sender===username)?'current-user': 'other-user'}`}>
                        {data.message + ' '} 
                        <p>{data.sender}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
