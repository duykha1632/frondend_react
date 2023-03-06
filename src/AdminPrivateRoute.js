import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import axios from "axios";
import swal from "sweetalert";

const AdminPrivateRoute = ({...rest}) => {
    const history = useHistory();
    const [Authen, setAuthen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/checkLogin')
        .then( res => {
            if(res.status === 200){
                setAuthen(true)
            }
            setLoading(false)
        })
        return () => {
            setAuthen(false)
        }
    }, [])
    axios.interceptors.response.use(undefined, function reload(err){
        if(err.response.status === 401){
            swal('Unauthorized', err.response.data.message, 'warning')
            history.push('/')
        }
        return Promise.reject(err)
    })
    axios.interceptors.response.use(function(response){
        return response
    }, function(err){
        if(err.response.status === 403){
            swal('Forbidden', err.response.data.message, 'warning')
            history.push('/403')
        }else if(err.response.status === 404){
            swal('404 Error',"Url not found", 'warning')
            history.push('/404')
        }
        return Promise.reject(err)
    })
    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <Route {...rest}
            render = {(props, location) => 
                Authen ? 
                ( <MasterLayout {...props}/>) :
                ( <Redirect to={{pathname:"/login", state:{from: location}}}/>)
            }
        />
    )
}

export default AdminPrivateRoute;