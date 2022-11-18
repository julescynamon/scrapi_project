import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createComment } from '../../services/commentApi';


export default function FormComment({fetchComments, id}) {

    const [comment, setComment] = useState({});

    const handleChange = ({ currentTarget }) => {
        const { name, value }= currentTarget;
        setComment({ 
            ...comment, 
            post: id, 
            [name]: value 
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createComment({data: comment});
            console.log(response);
            setComment("");
            fetchComments();
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {}, [comment]);

    return (
        <div>
            <form onSubmit={ handleSubmit }>
            <TextField
                id="standard-text-input"
                label="Nom"
                type="text"
                variant="standard"
                name="pseudo"
                onChange={handleChange}
                value={comment.pseudo || ''}
            />
            <TextField
                id="standard-multiline-static"
                label="Commentaire"
                multiline
                rows={4}
                variant="standard"
                name="content"
                onChange={handleChange}
                value={comment.content || ''}
            />
            <Button variant="contained" type="submit">Envoyer</Button>
            </form>
        </div>
    )
}
