import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const notes =[
    {
        id:1,
        content:'working with list',
        important:true
    },
    {
        id:2,
        content:'usage of keys',
        important:false
    },
    {
        id:3,
        content:'conditional rendering',
        important:true
    },
    {
        id:4,
        content:'handling events',
        important:true
    },
    {
        id:5,
        content:'props vs state',
        important:false
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>);