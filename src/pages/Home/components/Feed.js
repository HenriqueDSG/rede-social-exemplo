import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) =>
({
    root:
    {

    }
}))

const posts = [
    {
        id: 1,
        author:
        {
            id: 1,
            name: 'Autor teste 1',
            userName: 'autorTeste1',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'titulo teste 1',
        date: '01/07/2021',
        description: 'teste 1',
        hashTags: '#React.JS, #JavaScript, #CSharp',
        image: '/images/posts/post.jpg'
    },
    {
        id: 2,
        author:
        {
            id: 2,
            name: 'Autor teste 2',
            userName: 'autorTeste2',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'titulo teste 2',
        date: '01/07/2021',
        description: 'teste 2',
        hashTags: '#React.JS, #JavaScript, #CSharp',
        image: '/images/posts/post.jpg'
    },
    {
        id: 3,
        author:
        {
            id: 3,
            name: 'Autor teste 3',
            userName: 'autorTeste3',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'titulo teste 3',
        date: '01/07/2021',
        description: 'teste 3',
        hashTags: '#React.JS, #JavaScript, #CSharp',
        image: '/images/posts/post.jpg'
    },
];

const Feed = () => 
{
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
            </div>
     );
}
 
export default Feed;