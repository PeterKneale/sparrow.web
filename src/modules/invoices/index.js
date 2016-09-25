import React from 'react'
import Header from '../../components/header';
import Navigation from '../../components/navigation/invoices';

const Invoices = () => {
    return (
        <div>
            <Navigation/>
            <Header heading="Invoices" subheading="Your invoices."/>
        </div>
    )
}

export default Invoices