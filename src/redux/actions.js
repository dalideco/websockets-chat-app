const setInput = (name, value)=>{
    return {
        type: 'SET_INPUT',
        name, 
        value
    }
}

const addMessage = (sender, message)=>{
    return {
        type:'ADD_MESSAGE',
        sender,
        message
    }
}

export {setInput, addMessage}