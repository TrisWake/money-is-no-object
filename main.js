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
//     let lowestScore = homeworkArr[0].averageScore
//     let lowestName = homeworkArr[0].name
//     //how do we access all of the values in an array?
//     for(let i = 0; i < homeworkArr.length; i++){
//         //access averge score
//         //homeworkArr[i]
//         //check to see if avg score less than other scores
//         if(homeworkArr[i].averageScore < lowestScore){
//             lowestScore = homeworkArr[i].averageScore
//             lowestName = homeworkArr[i].name
//         }
//     }
//     return lowestName
// }
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