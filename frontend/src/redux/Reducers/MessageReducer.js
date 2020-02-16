const initialState = {
    message: "",
    messageHistory: []

}
export default (state = initialState, action) => {
    switch (action.type) {

        case 'set_message':
            return Object.assign({}, state, {
                message: action.message,
            });

        case 'set_message_history':
            return Object.assign({}, state, {
                messageHistory: [...state.messageHistory, action.message],
            });

        

        default:
            return state

    }

}