import React, {PropTypes} from 'react';
import { RotateLoader } from 'halogen';

const Spinner = ({visible}) => (
    <RotateLoader loading={visible} color="#ABFFEE" size="25px" margin="4px" className="spinner"/>
);

Spinner.propTypes = {
    visible : PropTypes.bool
};

export default Spinner;
