import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { NavDrawer, List, ListItem, ListDivider } from 'react-toolbox';

const Navigation = function (props) {
    let items = [
        { caption: "Home", icon: "home" },
        { caption: "People", icon: "people" }
    ];

    return <NavDrawer >

        <List>

            <ListItem
                selectable
                caption='Home' leftIcon='home'
                onClick={() => onClick('home') } />

            <ListDivider />
            
            <ListItem
                selectable
                caption='People' leftIcon='supervisor_account'
                onClick={() => onClick('people') } />

            <ListItem
                selectable
                caption='Invoices' leftIcon='reorder'
                onClick={() => onClick('invoices') } />

            <ListItem
                selectable
                caption='Estimates' leftIcon='line_weight'
                onClick={() => onClick('estimates') } />

            <ListItem
                selectable
                caption='Expenses' leftIcon='bookmark_border'
                onClick={() => onClick('expenses') } />

            <ListItem
                selectable
                caption='TimeTracking' leftIcon='done_all'
                onClick={() => onClick('timetracking') } />

            <ListItem
                selectable
                caption='Reports' leftIcon='credit_card'
                onClick={() => onClick('reports') } />

        </List>

    </NavDrawer>
};

Navigation.propTypes = {
    current: PropTypes.string
};

module.exports = Navigation;