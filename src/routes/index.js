import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing } from '../pages';


export default function Routes(){

    useEffect(() => {
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
            </Switch>
        </BrowserRouter>
    );
}