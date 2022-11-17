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
import FormComment from './components/FormComment';
import { findOne } from '../services/postApis';
import { findAllComments } from '../services/commentApi';
import PostContentLoader from './components/PostContentLoader';


export default function Post() {

    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);


    const { id } = useParams();

    const fetchPost = async () => {
        const data = await findOne(id);
        setPost(data.data.attributes);
        setIsLoading(true);
    }

    const fetchComments = async () => {
        const data = await findAllComments();
        console.log(data);
        setComments(data.data);
        setIsLoading(true);
    }

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    

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
                        <PostContentLoader />
                    ) }</p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <FormComment fetchComments={fetchComments} />
                </Grid>
                <Grid item md={8}>
                    {isLoading ? comments.map( comment => (
                    <List key={comment.id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary={comment.attributes.pseudo}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {comment.attributes.content}
                                </Typography>
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    )) : (
                        <PostContentLoader />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}
