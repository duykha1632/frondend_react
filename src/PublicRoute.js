import React from "react";
import { Route } from "react-router-dom";
import FrontendLayOut from './layouts/frondend/FrontendLayOut';

function PublicRoute({...rest})
{
    return(
        <Route {...rest} render={ (props) => <FrontendLayOut {...props} /> } />
    )
}

export default PublicRoute;