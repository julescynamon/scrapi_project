import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../../config';

export default function CardPost({ post }) {


    const postImages = post.attributes.image.data;

    const newImg = postImages.attributes.formats.small.url.toString();

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={ API_URL + newImg}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {post.attributes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {post.attributes.content.substring(0, 100)} ...
            </Typography>
        </CardContent>
        <CardActions>
            <NavLink to={`posts/${post.id}`}>
                <Button size="small">Learn More</Button>
            </NavLink>
        </CardActions>
        </Card>
    );
}
