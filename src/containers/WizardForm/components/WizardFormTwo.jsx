import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar } from 'reactstrap';
import SignatureCanvas from "react-signature-canvas";

const WizardFormTwo = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Semnatura Restaurant</h3>

<div className="col-lg-12">
    <SignatureCanvas
      penColor="green"
      canvasProps={{ width: 1500, height: 500, className: "sigCanvas" }}
      penColor="blue"
      backgroundColor="rgba(238,240,245)"
    />
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
      <Button color="primary" type="submit" className="next">Next</Button>
    </ButtonToolbar>
  </form>

);

WizardFormTwo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormTwo);
