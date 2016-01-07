/* global fetch */

export async function fetchUser(username) {
    return await fetch(`https://api.github.com/users/${username}`)
        .then(data => data.json())
}