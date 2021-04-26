import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/styles/styles.scss';

import MainPage from './routes/MainPage';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={MainPage} path="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
