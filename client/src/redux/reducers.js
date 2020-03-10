


const initstate ={
    contacts:[]
}

const ContactReducer=(state=initstate, action)=>{
    switch(action.type){
        case "GET_CONTACT":
            return {...state, contacts:action.payload}
        default :
        return state
    }
}

export default ContactReducer