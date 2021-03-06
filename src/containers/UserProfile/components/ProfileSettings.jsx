/* eslint-disable react/no-children-prop */
import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonToolbar, Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  children,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    children={children}
    value={input.value}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  children: PropTypes.arrayOf(PropTypes.element),
};

renderTextField.defaultProps = {
  meta: null,
  label: "",
  children: [],
};

const ProfileSettings = ({ handleSubmit, reset }) => (
  <>
  <Row>
    <Col lg={6}>
    <form className="material-form" onSubmit={handleSubmit}>
    <h3>Profile Info</h3>
    <br />
      <div>
        <span className="material-form__label">Full Name</span>
        <Field name="username" component={renderTextField} placeholder="Name" />
      </div>
      <div>
        <span className="material-form__label">Email</span>
        <Field
          name="email"
          component={renderTextField}
          placeholder="example@mail.com"
          type="email"
        />
      </div>
      <div>
        <span className="material-form__label">Phone Number</span>
        <Field
          name="phone"
          component={renderTextField}
          placeholder="example@mail.com"
          type="phone"
        />
      </div>
      <div>
        <span className="material-form__label">Titulatura -  admin</span>
        <Field
          name="totulatura"
          component={renderTextField}
          placeholder="example@mail.com"
          type="phone"
        />
      </div>
      <div>
        <span className="material-form__label">Societata Comerciala - admin</span>
        <Field
          name="societateComerciala"
          component={renderTextField}
          placeholder="example@mail.com"
          type="phone"
        />
      </div>
      {/* <div>
      <span className="material-form__label">Text Area</span>
      <Field
        name="textarea"
        component={renderTextField}
        placeholder="Type message here"
        multiline
        rowsMax="4"
      />
    </div> */}
      <ButtonToolbar className="form__button-toolbar">
        <Button color="primary" type="submit">
          Update profile
        </Button>

      </ButtonToolbar>
    </form>
    </Col>
    <Col lg={6}>

    <form className="material-form" onSubmit={handleSubmit}>
      <h3>Reset Password</h3>
      <br />
      <div>
        <span className="material-form__label">Old Password</span>
        <Field name="username" component={renderTextField} placeholder="Name" />
      </div>
      <div>
        <span className="material-form__label">New Password</span>
        <Field
          name="email"
          component={renderTextField}
          placeholder="example@mail.com"
          type="email"
        />
      </div>
      <div>
        <span className="material-form__label">Retype New Password</span>
        <Field
          name="phone"
          component={renderTextField}
          placeholder="example@mail.com"
          type="phone"
        />
      </div>
      <ButtonToolbar className="form__button-toolbar">
        <Button color="primary" type="submit">
          Reset Password
        </Button>
      
      </ButtonToolbar>
    </form>
    </Col>
    </Row>
  </>
);

ProfileSettings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "profile_settings_form", // a unique identifier for this form
})(ProfileSettings);
