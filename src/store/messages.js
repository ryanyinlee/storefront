const initialState = {
    channels: [],
    messages: [],
    friends: [
        {name: 'Test1'},
        {name: 'Test2'},
        {name: 'Test3'},
        {name: 'Test4'},
        {name: 'Test5'}
    ]
};

const messageReducer = (state = initialState, action) => {
    let {type, payload } = action;

    switch(type) {
        case "ADD_MESSAGE":
            return {...state, messages: [...state.messages, payload]}
        case "ADD_FRIEND":
            return {...state, friends:  [...state.friends, payload] }
        default:
            return state
    }
}

export const addMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
}

export const addFriend = (friend) => {
    return {
        type: 'ADD_FRIEND',
        payload: friend
    }
}

export default messageReducer;