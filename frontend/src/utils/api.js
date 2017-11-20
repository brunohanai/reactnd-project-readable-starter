const apiUrl = 'http://localhost:3001'
const apiHeaders = { 'Authorization': 'whatever-you-want' }

export function apiFetchPosts (category = null) {
    let url = `${apiUrl}/posts`
    
    if (category !== null) {
        url = `${apiUrl}/${category}/posts`
    }

    return fetch(url, { headers: apiHeaders }).then((res) => res.json())
}

export function apiFetchPostById (id) {
    const url = `${apiUrl}/posts/${id}`
    
    return fetch(url, { headers: apiHeaders }).then((res) => res.json())
}

export function apiFetchCategories () {
    const url = `${apiUrl}/categories`

    return fetch(url, { headers: apiHeaders }).then((res) => res.json())
}

export function apiFetchComments (postId) {
    const url = `${apiUrl}/posts/${postId}/comments`

    return fetch(url, { headers: apiHeaders }).then((res) => res.json())
}

export function apiNewPost (post) {
    const url = `${apiUrl}/posts`
    
    let headers = { 
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'POST',
        body: JSON.stringify(post)
    }
    
    return fetch(url, headers).then(res => res.json())
}

export function apiEditPost (post) {
    const url = `${apiUrl}/posts/${post.id}`
    
    let headers = { 
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'PUT',
        body: JSON.stringify(post)
    }
    
    return fetch(url, headers).then(res => res.json())
}

export function apiDeletePost (postId) {
    const url = `${apiUrl}/posts/${postId}`

    let headers = { 
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'DELETE',
    }

    return fetch(url, headers).then(res => res.json())
}

export function apiNewComment (comment) {
    const url = `${apiUrl}/comments`

    const headers = {
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'POST',      
        body: JSON.stringify(comment)  
    }

    return fetch(url, headers).then(res => res.json())
}

export function apiEditComment (comment) {
    const url = `${apiUrl}/comments/${comment.id}`

    const body = {
        timestamp: comment.timestamp,
        body: comment.body,
    }

    const headers = {
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'PUT',      
        body: JSON.stringify(body),
    }

    return fetch(url, headers).then(res => res.json())
}

export function apiDeleteComment (comment) {
    const url = `${apiUrl}/comments/${comment.id}`

    const headers = {
        headers: { ...apiHeaders , 'Content-Type': 'application/json'}, 
        method: 'DELETE',
    }

    return fetch(url, headers).then(res => res.json())
}