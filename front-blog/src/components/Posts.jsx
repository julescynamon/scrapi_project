import React, { useEffect, useState } from 'react';
import { Grid, Box }from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import CardPost from './CardPost';

export default function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/posts/?populate=image', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="posts">
            <h1>Listes des posts</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box sx={{ width: '100%' }}>
                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                        {/* For other variants, adjust the size with `width` and `height` */}
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={60} />
                        <Skeleton variant="rounded" width={210} height={60} />
                    </Box>
                ) : posts.map(post => (
                    <CardPost key={post.id} post={post} />
                ))} 
            </Grid>
        </div>
    )
}
