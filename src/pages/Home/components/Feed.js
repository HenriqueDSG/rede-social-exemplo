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
        autor:
        {
            id: 1,
            name: '',
            userName: '',
            avatar: ''
        },
        title: '',
        date: '',
        description: 'teste 1',
        hashTags: '',
        image: ''
    },
    {
        id: 2,
        autor:
        {
            id: 2,
            name: '',
            userName: '',
            avatar: ''
        },
        title: '',
        date: '',
        description: 'teste 2',
        hashTags: '',
        image: ''
    },
    {
        id: 3,
        autor:
        {
            id: 3,
            name: '',
            userName: '',
            avatar: ''
        },
        title: '',
        date: '',
        description: 'teste 3',
        hashTags: '',
        image: ''
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