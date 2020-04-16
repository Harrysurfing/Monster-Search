import React from 'react';
import './searchbar.style.css';

export const Searchbar = ({placeholder, handlechange} ) => {
    
   
    return(

    <input type='search' 
        className ='search'
        placeholder= {placeholder} 
        onChange={handlechange}
    />
    )

};