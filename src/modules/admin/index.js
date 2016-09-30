import React from 'react'
import Header from '../../components/header';
import AdminMenu from '../../components/menu/adminmenu';

const Admin = (props) => {
    return (
        <div>
            <AdminMenu/>
            {props.children}
        </div>
    )
}

Admin.propTypes = {

};

export default Admin

