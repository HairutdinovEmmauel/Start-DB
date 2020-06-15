import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-services';
import ErrorBoundry from '../error-boundry'; 

import {
    SwapiServiceProvider
} from '../swapi-services-context';
import { 
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from '../pages';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {

        const { isLoggedIn } = this.state;

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="app">
                            <Header />
                            <RandomPlanet getInterval={10000}/>
                            
                            <Switch>
                                <Route 
                                    path='/' 
                                    render={() => (
                                        <h3 className='text-center' >Welcome to Star DB</h3>
                                    )} 
                                    exact />
                                <Route path={'/people/:id?'} component={PeoplePage} />
                                <Route path={'/planets'} component={PlanetPage} />
                                <Route path={'/starships'} exact component={StarshipPage} />
                                <Route path={'/starships/:id'} 
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        console.log(match.params.id);
                                        return <StarshipDetails itemId={id} />
                                    } } />
                                <Route 
                                    path={'/login/'} 
                                    render={() => (
                                        <LoginPage 
                                            isLoggedIn={isLoggedIn} 
                                            onLogin={this.onLogin }/>
                                    )} />

                                <Route 
                                    path={'/secret/'} 
                                    render={() => (
                                        <SecretPage  isLoggedIn={isLoggedIn} />
                                    ) } />

                                <Route render={() => <h3>Page not found</h3>} />
                            </Switch>
                            
                            
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
            
        );

    }

    
};


