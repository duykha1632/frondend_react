import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom';
function Navbar(){
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault();
        axios.post(`/api/logout`)
            .then(res => {
                if(res.data.status === 200){
                    localStorage.removeItem('auth_token')
                    localStorage.removeItem('user_name')
                    swal("success", res.data.message, 'success')
                    history.push('/')
                }
            })

    }
    var AuthButton = ''
    if(!localStorage.getItem('auth_token')){
        AuthButton = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>   
                 <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>   
                
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>  
            </ul>
        )
    }else{
        AuthButton = (
            <li className="nav-item">
                <button type="button" onClick={handleLogout} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>
            </li> 
        )
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="#">Ecommercial</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link" to="collections">Collections</Link>
                </li>   
                {AuthButton}           
            </ul>
           
            </div>
        </div>
        </nav>
    )
}

export default Navbar