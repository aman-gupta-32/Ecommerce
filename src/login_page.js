import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function login_page(){
    return{
        <form>
        <div className=  "container-input">
            <label>Email</label>
            <input type="text" name = "name-user" required/>

        </div>
        <div className="container-input">
           <label>Password</label>
           <input type="password" name="pass" required/>

        </div>
        <div className = "button">
            <input type = "submit"/>
        
        </div>

        </form>

    }
    
        
}

export default login_page