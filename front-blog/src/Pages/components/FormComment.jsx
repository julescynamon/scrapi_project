import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createComment } from '../../services/commentApi';


export default function FormComment({fetchComments}) {

    const [comment, setComment] = useState({});

    const handleChange = ({ currentTarget }) => {
        const { name, value }= currentTarget;
        setComment({ ...comment, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(comment);
        try {
            const response = await createComment({data: comment});
            fetchComments();
        } catch (error) {
            console.log(error.response);
        }
    };

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
            />
            <TextField
                id="standard-multiline-static"
                label="Commentaire"
                multiline
                rows={4}
                variant="standard"
                name="content"
                onChange={handleChange}
            />
            <Button variant="contained" type="submit">Envoyer</Button>
            </form>
        </div>
    )
}
