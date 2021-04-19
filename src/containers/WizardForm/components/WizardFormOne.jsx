import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar } from 'reactstrap';
import EyeIcon from 'mdi-react/EyeIcon';
import MatTable from "./MatTable";
import { GetInquires } from "../../../redux/actions/products";

const WizardFormOne = ({ handleSubmit, inquires, GetInquires }) => {

  const [buttonText, setButtonText] = useState('Trimite OTP');

  function sendOTP(e)  {
    e.preventDefault();
    setButtonText('Retrimite OTP');
}




  return (
    <>
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>

      {/* <MatTable/> */}
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" disabled='false' className="previous">Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
    </form>
    </>
  );
};

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  
};



export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
