import React, { useEffect, useState, useContext } from 'react'
import './YourSnippets.css'
import db from '../firebase'
import Snippet from './Snippet';
import { LoginContext } from '../context/LoginContext'

const YourSnippets = () => {

    const [posts, setPosts] = useState([]);
    const {username} = useContext(LoginContext);

    useEffect(() => {
        db.collection('posts').where("username","==",username).onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className='your-snippets'>

            { posts.map((post) => (
                <Snippet
                key={post.id}
                title={post.data.title}
                code={post.data.code}/>
            )) }

        </div>
    )
}

export default YourSnippets
