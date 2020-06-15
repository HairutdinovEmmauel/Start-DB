import React from 'react';
import ItemList from '../item-list';
import { 
    withData,
    withSwapiService,
    withChildFunction,
    compose
}  from '../hoc-heiper';

const mapPersonMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getAllPeople
    }
};

const mapPlanetMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getAllPlanets
    }
};

const mapStarshipMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getAllStarships
    }
};

const renderName = ({name}) => <span>{name}</span>

const PersonList = compose(
            withSwapiService(mapPersonMethdoszToProps),
            withData,
            withChildFunction( renderName )
        )( ItemList );

const PlanetList = compose( 
            withSwapiService( mapPlanetMethdoszToProps ),
            withData,
            withChildFunction( renderName )
        )( ItemList );

const StarshipList = compose(
            withSwapiService( mapStarshipMethdoszToProps ),
            withData,
            withChildFunction( renderName )
        )( ItemList );

export {
    PersonList,
    PlanetList,
    StarshipList
}

