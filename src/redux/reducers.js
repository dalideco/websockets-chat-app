const messagesReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_MESSAGE': 
            return [...state , {sender:action.sender, message: action.message }]
        default: 
            return state;
    }
}

const inputsReducer = (
    state = {
        username: '',
        message:'',
    },
    action
)=>{
    switch(action.type){
        case 'SET_INPUT':
            return {
                ...state , 
                [action.name]:action.value
            }
        default : 
            return state ; 
    }
}

export {messagesReducer,inputsReducer}