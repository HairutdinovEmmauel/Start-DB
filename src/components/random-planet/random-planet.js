import React, { Component } from 'react';
import PropType from 'prop-types';

import './random-planet.css';
import SwapiService from '../../services/swapi-services'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.updataPlanet();
        this.interval = setInterval(this.updataPlanet, this.props.getInterval);
    } 

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet, 
            loading: false 
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updataPlanet = () => {

        const id = Math.floor(Math.random() * 17 + 2 );

        this.swapi.getPlanets(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    
    render() {
        const { planet, loading, error } = this.state;

        const hasData = !( loading || error );

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className="random-planets">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
    

};

RandomPlanet.defaultProps = {
    getInterval: 10000
}

RandomPlanet.propType = {
    getInterval: PropType.number
}

const PlanetView = ({ planet }) => {

    const { id, name, population, 
        rotationPeriod, diameter } = planet;

    return(
        <React.Fragment>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
            <div className="info-planets">
                <h2>{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter </span>
                        <span>{diameter}    </span>
                    </li>
                </ul>
            </div> 
        </React.Fragment>
    )

}


