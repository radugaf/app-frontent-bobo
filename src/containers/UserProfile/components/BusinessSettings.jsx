/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Col, Row, Label, Input, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import CategoryButtons from "./CategoryButtons";

const renderTextField = ({
  input, label, meta: { touched, error }, children,
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
  label: '',
  children: [],
};

const BusinessSettings = ({ handleSubmit, reset }) => (
  
  
    <Row>

    <Col lg={6}>
    <form className="material-form" onSubmit={handleSubmit}>
    <h3>Informatii Publice</h3>
    <br />
    <div>
      <span className="material-form__label">Denumire Brand</span>
      <Field
        name="brandName"
        component={renderTextField}
        placeholder="Denumire Brand"
      />
    </div>

    <div>
      <span className="material-form__label">Telefon Contact</span>
      <Field
        name="telefonContact"
        component={renderTextField}
        placeholder="Numarul de telefon pentru contact"
      />
    </div>
    <div>
      <span className="material-form__label">Adresa Contact</span>
      <Field
        name="adresaContact"
        component={renderTextField}
        placeholder="Adresa de contact"
      />
    </div>
    <div>
      <span className="material-form__label">Website</span>
      <Field
        name="webstite"
        component={renderTextField}
        placeholder="Website-ul firmei"
      />
    </div>
    <div>
      <span className="material-form__label">Reprezentant Comercial</span>
      <Field
        name="reprezentantComercial"
        component={renderTextField}
        placeholder="Numele reprezentantului comercial"
      />
    </div>
    <div>
      <span className="material-form__label">Orar de functionare</span>
      <Field
        name="orarFunctionare"
        component={renderTextField}
        placeholder="Orar de functionare"
      />
    </div>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" type="submit">Update</Button>
      <Button type="button" onClick={reset}>
        Cancel
      </Button>
    </ButtonToolbar>
    </form>
    </Col>
    <Col lg={6}>
    <form className="material-form" onSubmit={handleSubmit}>
    <h3>Infromatii Interne</h3>
    <br />

    <div>
      <span className="material-form__label">Nume firma</span>
      <Field
        name="numeFirma"
        component={renderTextField}
        placeholder="Numele firmei"
      />
    </div>
    <div>
      <span className="material-form__label">Sediu Social</span>
      <Field
        name="sediuSocial"
        component={renderTextField}
        placeholder="Adresa Sediului Social"
      />
    </div>
    <div>
      <span className="material-form__label">CUI</span>
      <Field
        name="cuiFirma"
        component={renderTextField}
        placeholder="CUI Firma"
      />
    </div>
    <div>
      <span className="material-form__label">ONRC</span>
      <Field
        name="onrcFirma"
        component={renderTextField}
        placeholder="ONRC Firma"
      />
    </div>
    <div>
      <span className="material-form__label">Cont IBAN</span>
      <Field
        name="ibanFirma"
        component={renderTextField}
        placeholder="IBAN Firma"
      />
    </div>
    <div>
      <span  className="material-form__label">Zone de livrare</span>
      <CategoryButtons style={{ marginTop: "10px !important"}} />
    </div>
    <div>
      <span className="material-form__label">Platitor de TVA</span>
      <FormGroup tag="fieldset">
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Da
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Nu
          </Label>
        </FormGroup>
        </FormGroup>
      </div>
      <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" type="submit">Update</Button>
      <Button type="button" onClick={reset}>
        Cancel
      </Button>
    </ButtonToolbar>
    </form>
    </Col>

    </Row>

);

BusinessSettings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profile_settings_form', // a unique identifier for this form
})(BusinessSettings);
