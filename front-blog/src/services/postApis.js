import { API_URL } from '../config';


export function findAll() {
    return fetch(`${API_URL}/api/posts/?populate=image`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json());
}

export function findOne(id) {
    return fetch(`${API_URL}/api/posts/${id}?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json());
}

