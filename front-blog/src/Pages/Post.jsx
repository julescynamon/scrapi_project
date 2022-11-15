import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function Post() {

    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:1337/api/posts/${id}/?populate=image`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                setPost(response.data);
                setIsLoading(false);
            });
    }, [id]);


    return (
        <div>
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div>
                    <h1>{post.attributes.title}</h1>
                    <p>{post.attributes.content}</p>
                </div>
            )}    
        </div>
    )
}
