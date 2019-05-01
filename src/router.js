import { Route, Switch } from 'react-router-dom'
import Search from './search';
import App from './App.js';
import React, { Component } from 'react';
import RouteNotExistComponent from './RouteNotExistComponent';


export default class Routes extends Component{
    constructor(props){
        super(props);
    }
    render(){
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
}
