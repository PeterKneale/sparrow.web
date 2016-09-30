import React, {PropTypes} from 'react';
import { RotateLoader } from 'halogen';

const Spinner = ({spin}) => (
    <RotateLoader loading={spin} color="#ABFFEE" size="25px" margin="4px" className="spinner"/>
)
    
Spinner.propTypes = {
    spin : PropTypes.bool
};

export default Spinner




