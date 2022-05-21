import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase"
import { useState, useContext } from 'react'
import { LoginContext } from './context/LoginContext'
const Login = () => {

    const {setLoggedIn, setUsername, setPhoto} = useContext(LoginContext);

const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
            
        var credential = result.credential;

        var token = credential.accessToken;
        var user = result.user;
        setUsername(result.user.displayName);
        setLoggedIn(result.user);
        setPhoto(result.user.photoURL);
        console.log(result.user.photoURL)

    }).catch(error=>alert(error.message));;
}

    return (
        <div className='login'>
            <div className='left-panel'>
                <h1><i class="fas fa-code"></i> snipcoded.</h1>
                <p><i class="far fa-heart"></i>&nbsp; To keep your favorite code snippets in one place.</p>
                <p><i class="fas fa-search-dollar"></i>&nbsp; <u>Free</u> & <u>Easy</u> to use web application.</p>
            </div>
            <div className='right-panel'>
                <p>Get started by signing in: </p>
            <button onClick={signIn}><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></img>&nbsp;SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default Login
