// 3. Create a Set to represent followers of a social media account. Implement functions 
//    to add followers, remove followers, and check if a user is already following.

const followers = new Set()
function add (follower) {
    return followers.add(follower)
}
function remove (follower) {
    if (followers.has(follower)) {
        return followers.delete(follower)
    }
 return `The follower isn't exist, please check`
}
function check (follower) {
        return followers.has(follower)
    }
 

add("Knarik")
add("Somebody")
remove("Somebody")
console.log(check("Some"))
console.log(followers);