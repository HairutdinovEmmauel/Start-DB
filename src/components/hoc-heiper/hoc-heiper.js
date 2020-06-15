import React, { Component } from 'react';
import './hoc-heiper.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData  = (View) => {
    return class extends Component {

        state = {
            data: null,
            loaging: true,
            error: false,
        }
     
        componentDidMount() {

            // console.log(this.props)
    
            this.props.getData()
                .then((data) => { 
                    this.setState({
                        data,
                        loaging: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loaging: false
                    })
                });
        };

        render() {

            const { data, error, loaging } = this.state;

            if(loaging) {
                return <Spinner /> 
            }

            if(error) {
                return <ErrorIndicator />
            }

            return <View { ... this.props } data={data} />;
        }
    }
};

export default withData;