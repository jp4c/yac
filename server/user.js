const users = [];

const addUser = ({ id, nickname }) => {
    nickname = nickname.trim()

    const user = { id, nickname };

    users.push(user);
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getNicknameUsers = () => {
    const nicknames = users.map((user) => { return user.nickname })

    return nicknames
}
const getUsers = ()=>{
    return users
}
module.exports = { addUser, removeUser, getUser,getNicknameUsers,getUsers };