import React from 'react'
import './Header.css'
import { useState, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import firebase from 'firebase'
import {auth, provider} from "../firebase"


const Header = () => {

    const {photo} = useContext(LoginContext);
    const {username} = useContext(LoginContext);
    const {setLoggedIn} = useContext(LoginContext);

    const signOut = () =>{
        firebase.auth().signOut().then(() => {
            setLoggedIn(null);
          }).catch((error) => {
            // An error happened.
          });
        }
    
    return (
        <div className='header'>
            <div className='container'>
                <p className='logo'><i class="fas fa-code"></i> snipcoded.</p>
                <div className='userinfo'>
                    <button onClick={signOut}>LOG OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Header
