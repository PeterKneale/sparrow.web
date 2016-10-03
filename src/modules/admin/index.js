import React from 'react'
import {Title, MenuAdmin} from '../../components';

const Admin = (props) => {
    return (
        <div>
            <MenuAdmin/>
            {props.children}
        </div>
    )
}

Admin.propTypes = {

};

export default Admin

