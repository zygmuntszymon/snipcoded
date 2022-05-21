import React from 'react'
import './YourSnippets.css'

const Snippet = ({title, code}) => {


    return (
        <div className='snippet'>
            <h4>{title}</h4>
            <pre>{code}</pre>
        </div>
    )
}

export default Snippet
