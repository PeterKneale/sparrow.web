import React from 'react'
import Header from '../../components/header';
import Navigation from '../../components/navigation/people';

const People = (props) => {
    return (
        <div>
            <Navigation/>
            {props.children}
        </div>
    )
}

People.propTypes = {

};

export default People

