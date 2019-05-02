import { Route, Switch } from 'react-router-dom'
import Search from './Search';
import App from './App.js';
import React from 'react';
import RouteNotExistComponent from './RouteNotExistComponent';

const Routes = () => {
    
    return (
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/search" 
                        render={(props)=><Search {...props}  /> }
                    />
                    <Route path="*" component={RouteNotExistComponent}/>
                </Switch>
            </div> 
        )
}

export default Routes;
