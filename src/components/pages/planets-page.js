import React, { Component } from 'react';
import Row from '../row';
import {
    PlanetList,
    PlanetDetails
} from '../sw-components';

export default class PlanetPage extends Component {

    state = {
        itemId: 3
    }

    onItemSelected = (id) => {
        this.setState({ 
            itemId: id
        })
    }

    render() {

        const { itemId } = this.state;
        
        return (
            <Row 
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={itemId + 4}/>} />
        );
    }
}