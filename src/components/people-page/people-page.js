import React, { Component } from 'react';
import './people-page.css';

import ErrorIndicator from '../error-indicator';
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-services';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';
import Row from '../row';

export default class PeoplePage extends Component {

    swapi = new SwapiService();

    state = {
        itemId: 1
    }

    

    onItemSelected = (id) => {
        this.setState({ 
            itemId: id
        })
    }


    render() {

        const { itemId } = this.state;

        if(this.state.error) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapi.getAllPeople} >
                    { (i) => (
                        `${i.name} ${i.birthYear}` 
                    )}
            </ItemList>
        );
            

        const itemDetails = (
            <ItemDetails 
                itemId={itemId}
                getItemDetails={this.swapi.getPerson} />
        );
        

        return(
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
                <ErrorButton />
            </ErrorBoundry>
                        
        )
    }
} 