import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-heiper';

const PlanetDetails = (props) => {

    return (
        <ItemDetails { ... props } >

                <Record field={'population'} label={'Population'} />
                <Record field={'rotationPeriod'} label={'Rotation Period'} />
                <Record field={'diameter'} label={'Diameter'} />
        </ItemDetails>
    );
}

const mapMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getPlanets,
        getItemUrl: SwapiService.getPlanetImage
    }
}

export default withSwapiService( mapMethdoszToProps )( PlanetDetails );