import { API_URL } from '../config';
import axios from 'axios';


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

export function getComments(id) {
    return axios.get(`${API_URL}/api/posts/${id}/comments`).then(response => response.data);
}