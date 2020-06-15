import React, { Component } from 'react';
import './item-details.css';

import SwapiService from '../../services/swapi-services';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';

const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{ label } </span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
};

export default class ItemDetails extends Component {

    swapi = new SwapiService();

    state = {
        item: {},
        image: null,
    };

    componentDidMount() {
        this.updataItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ) {
            this.updataItem();
        } 
    }

    updataItem = () => {
        const { itemId, getData, getItemUrl } = this.props;

        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image: getItemUrl(item),
                })
            }) 

    };

    render() {

        const { item, image } = this.state;

        const { name } = item;
    
        return(
            <ErrorBoundry>
                <div className="person-details">
                    <div className="person-image">
                        <img src={image} alt={name}/>
                    </div>
                
                    <div className="info-person">
                        <h2>{ name }</h2>
                        <ul className="list-group list-group-flush">
                            { React.Children.map(this.props.children, (child) => {
                                
                                return React.cloneElement(child, { item });
                            }) }
                        </ul>
                        <ErrorButton />
                    </div> 
                </div>
            </ErrorBoundry>
        );
    }
   
};

