import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderFileInputField from '../../../shared/components/form/FileInput';
import renderSelectField from '../../../shared/components/form/Select';

const HorizontalForm = ({ handleSubmit }) => {

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Adauga Produse</h3>
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Titlu Contabil</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="Afisat pe factura"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Titlu Catalog</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="Afisare in catalog"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Catalog</span>
              <div className="form__form-group-field">
                <Field
                  name="select"
                  placeholder="Alege CATALOGUL potrivit produsului tau"
                  component={renderSelectField}
                  options={[
                    { value: 'kitchen', label: 'Kitchen' },
                    { value: 'bar', label: 'Bar' },
                    { value: 'plastic', label: 'Non-Alimentar' },
                    { value: 'equipment', label: 'Equipment' },
                    { value: 'services', label: 'Servicii' },
                    { value: 'candy', label: 'Cofetarie' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Categorie</span>
              <div className="form__form-group-field">
                <Field
                  name="select2"
                  placeholder="Alege CATEGORIA potrivita produsului tau"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Sub-Categorie</span>
              <div className="form__form-group-field">
                <Field
                  name="select3"
                  placeholder="Alege SUB-CATEGORIA potrivita produsului tau"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Descriere</span>
              <div className="form__form-group-field">
                <Field
                  name="textarea"
                  component="textarea"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">
                Adauga Poza
              </span>
              <div className="form__form-group-field">
                <Field
                  name="file"
                  component={renderFileInputField}
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(HorizontalForm);
