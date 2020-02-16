const initialState = {
    nickname_local: "",
    nicknameUsers: []

}
export default (state = initialState, action) => {
    switch (action.type) {

        case 'set_nickname':
            return Object.assign({}, state, {
                nickname_local: action.nickname,
            });

        case 'set_nicknames':
            return Object.assign({}, state, {
                nicknameUsers: action.nicknames,
            });

        

        default:
            return state

    }

}