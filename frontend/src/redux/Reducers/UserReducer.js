const initialState = {
    nickname:""

}
export default (state = initialState, action) => {
    switch (action.type) {

        case 'add_nickname':
            return Object.assign({}, state, {
                nickname: action.nickname,
            });

            
        default:
            return state

    }

}