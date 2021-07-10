import React from 'react'
import './scss/text.scss';

import { useSelector } from "react-redux";




export default function Text() {

    const fakeData = useSelector(state=> state.messages);
    const {username } = useSelector(state=> state.inputs)

    

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
