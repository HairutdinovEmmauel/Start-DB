import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-heiper';

const StarshipDetails = (props) => {

    return (
        <ItemDetails { ... props }>

                <Record field={'model'} label={'Model'} />
                <Record field={'length'} label={'Length'} />
                <Record field={'costInCredits'} label={'Cost'} />
        </ItemDetails>
    );
}

const mapMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getStarship,
        getItemUrl: SwapiService.getStarshipImage
    }
}

export default withSwapiService( mapMethdoszToProps )( StarshipDetails );