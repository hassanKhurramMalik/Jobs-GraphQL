import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes