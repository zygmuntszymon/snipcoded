import React, {useState} from 'react'
import './AddSnippet.css'
import db from '../firebase';
import firebase from 'firebase';
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const AddSnippet = () => {
    const handleSubmit = (e) => {
        //! to prevent page refreshing when when we submit
        e.preventDefault()

        //!some clever db stuff here
       if(input != '' && codeinput !=''){
        db.collection('posts').add({
            title: input,
            code:codeinput,
            username: username,
        })}


        //!resets enter
        setInput('');
        setCode('')
    } 

    const [input, setInput] = useState('');  
    const [codeinput, setCode] = useState('');  
    const {username} = useContext(LoginContext);

    return (
        <div className='add-snippet'>
            <p>POST A SNIPPET </p>
            <input placeholder='TITLE'
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
            <textarea placeholder = 'code here...'
                value={codeinput}
                onChange={(e) => setCode(e.target.value)}/>

            <button onClick={handleSubmit}><i class="fas fa-plus-circle"></i></button>
        </div>
    )
}

export default AddSnippet
