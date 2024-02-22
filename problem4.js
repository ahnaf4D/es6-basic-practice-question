const evenFriends = (friends) => {
    const evenFreinds = [];
    for(const friend of friends){
        if(friends.indexOf(friend) % 2 === 0){
            evenFreinds.push(friend);
        }
    }
    return evenFreinds;
}
console.log(evenFriends(['Alison','Amanda','Andrea']));
