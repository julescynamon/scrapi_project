import React, { useEffect, useState } from 'react';
import { Grid, Box }from '@mui/material';
import CardPost from './components/CardPost';
import PostContentLoader from './components/PostContentLoader';
import { findAll } from '../services/postApis';

export default function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const fetchAllPosts = async () => {
        const data = await findAll();
        setPosts(data.data);
        setIsLoading(false);
    }

    useEffect(() => {

        fetchAllPosts();

    }, []);

    return (
        <div className="posts">
            <h1>Listes des posts</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box sx={{ width: '100%' }}>
                        <PostContentLoader />
                    </Box>
                ) : posts.map(post => (
                    <CardPost key={post.id} post={post} />
                ))} 
            </Grid>
        </div>
    )
}
