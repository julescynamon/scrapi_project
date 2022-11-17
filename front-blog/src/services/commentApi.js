import { API_URL } from '../config';
import axios from 'axios';

export function findAllComments() {
    return axios
        .get(API_URL + "/api/comments")
        .then(response => response.data);
};

export function createComment(comment, id) {
    return axios.post(`${API_URL}/api/comments`, comment);
};