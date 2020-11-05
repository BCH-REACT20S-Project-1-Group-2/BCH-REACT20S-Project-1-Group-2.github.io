import React from 'react';
import '../styles/ExpenseItems.css'
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const ExpenseItems = () => {
    return (    
        <IconContext.Provider
        value= {{
            color: '#545149',
            size: '15px',
            style: {margin: '10px'}
        }}>
        <div className="ExpenseItems">
            <FaPencilAlt />
            <FaTrashAlt />        
        </div> 
        </IconContext.Provider>       
    );
};

export default ExpenseItems;