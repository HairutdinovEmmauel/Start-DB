import React from 'react';
import ErrorBoundry from '../error-boundry';

import {
    SwapiServiceConsumer
} from '../swapi-services-context';

const withSwapiService = ( mapMethdoszToProps ) => ( Wrapped ) => {

    return (props) => {
        return (
            <ErrorBoundry>
                <SwapiServiceConsumer>
                    {

                        (SwapiService) => {

                            const serviceProps = mapMethdoszToProps(SwapiService);

                            return <Wrapped { ... props } { ... serviceProps } />
                        }
                        
                    }
                    
                </SwapiServiceConsumer>
            </ErrorBoundry>
                
        );
        
    }
}

export default withSwapiService;