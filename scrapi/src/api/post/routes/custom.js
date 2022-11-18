module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/posts/:id/comments',
            handler: 'post.getPostWithComments',
            config: {
                auth: false,
            },
        }
    
    ]

}