import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/styles/styles.scss';
import Header from './components/header/Header';

import MainPage from './routes/MainPage';

function App() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route component={MainPage} path="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
