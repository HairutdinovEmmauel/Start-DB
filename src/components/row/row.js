import React from 'react';
import PropType from 'prop-types';

import './row.css';

const Row = ({ left, right }) => {

    return(
        <div className="content">
           { left }
           { right }
        </div>
    )
}

Row.propTypes = {
    left: PropType.node,
    right: PropType.node
}

export default Row;