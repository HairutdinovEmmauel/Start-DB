import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-heiper';

const PersonDetails = (props) => {
    return (
        <ItemDetails { ... props } >
                <Record field={'gender'} label={'Gender'} />
                <Record field={'eyeColor'} label={'Eye Color'} />
        </ItemDetails>
    );

}

const mapMethdoszToProps = (SwapiService) => {
    return {
        getData: SwapiService.getPerson,
        getItemUrl: SwapiService.getPersonImage
    }
}

export default withSwapiService(mapMethdoszToProps)(PersonDetails);