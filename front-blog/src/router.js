// import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Posts from './Pages/Posts';
import Post from './Pages/Post';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Posts />,
            },
            {
                path: 'posts/:id',
                element: <Post />,
            },
        ],
    }
]);
