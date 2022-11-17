import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { API_URL } from '../config';
import CardComments from './components/CardComments';
import FormComment from './components/FormComment';


export default function Post() {

    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(null);


    const { id } = useParams();


    useEffect(() => {
        fetch(`${ API_URL }/api/posts/${id}?populate=image`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                const data = response.data.attributes;
                setPost(data);
                setIsLoading(true);
            });
    },[id]);

    // recuperer l'url de l'image
    const postImages = post?.image.data;
    const newImg = postImages?.attributes.formats.small.url.toString();


    return (
        <div>
            <NavLink to="/">
                <Button>Retour</Button>
            </NavLink>
            <Grid container>
                <Grid item sm={6}>
                    {isLoading ? <img src={API_URL + newImg} alt="un texte"/> : <Skeleton variant="rectangular" width={210} height={118} />}
                </Grid>
                <Grid item sm={6}>
                    <h1>
                        { isLoading ? post.title : <Skeleton variant="text" width={300} height={80} />}
                    </h1>
                    <p>{ isLoading ? post.content : (
                        <>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </>
                    ) }</p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <FormComment />
                </Grid>
                <Grid item md={8}>
                    <CardComments />
                </Grid>
            </Grid>
        </div>
    )
}
