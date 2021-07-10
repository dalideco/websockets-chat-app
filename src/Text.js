import React, { useEffect, useState } from 'react'
import './scss/text.scss';




export default function Text() {

    const [fakeData,setFakeData] = useState([
        {User:'dali', message:'hello'},
        {User:'ziraj', message:'yeddek'},
    ])

    useEffect(()=>{
        setFakeData(prev=>[...prev, {User:'dope',message:'fuck you'}])
    },[])

    return (
        <div className="text">
            {fakeData.map(data=>(
                <div className="message">
                    <div className={`cadre ${(data.User==='dali')?'current-user': 'other-user'}`}>
                        {data.message}
                    </div>
                </div>
            ))}
        </div>
    )
}
