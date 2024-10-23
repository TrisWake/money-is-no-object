// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = function(userObj){
if(userObj.userRole === "ADMIN"){
    return true
}else{
    return false
}
}

function getEmail(userObj){
    if(userObj.firstName === "Kyle"){
        return "krose.prsvr@gmail.com"
    }if(userObj.firstName === "Jason"){
        return "jdoty.prsvr@gmail.com"
    }if(userObj.firstName === "John"){
        return "jdoe.prsvr@gmail.com"
    }
}

const getHardestHomework = function(homeworkArr){
    if(homeworkArr.length === 0){
        return ""
    }
    let lowestScore = homeworkArr[0]
    for(let i = 0; i < homeworkArr.length; i++){
        if(homeworkArr[i].averageScore < lowestScore.averageScore){
            lowestScore = homeworkArr[i]
        }
    }
    return lowestScore.name
}

function getPlaylistLength(playlist) {
    let count = 0
    if (playlist && playlist.songs){
    for (let i = 0; i < playlist.songs.length; i++) {
        if (playlist.songs[i]) {
            count++;
        }
    }
    }return count
}

function createPhonebook(name, number){
    const phonebook = {};
    for(let i = 0; i < name.number.length; i++){
        if(numbers[i] + name[i]){
        }phonebook++
    }return phonebook
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};