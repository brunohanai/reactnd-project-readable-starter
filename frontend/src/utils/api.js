const apiUrl = 'http://localhost:3001'
const apiHeaders = { headers: { 'Authorization': 'whatever-you-want' } }

export function apiFetchPosts (category = null) {
    let url = `${apiUrl}/posts`
    
    if (category !== null) {
        url = `${apiUrl}/${category}/posts`
    }

    return fetch(url, apiHeaders).then((res) => res.json())
}

export function apiFetchPostById (id) {
    const url = `${apiUrl}/posts/${id}`
    
    return fetch(url, apiHeaders).then((res) => res.json())
}

export function apiFetchCategories () {
    const url = `${apiUrl}/categories`

    return fetch(url, apiHeaders).then((res) => res.json())
}