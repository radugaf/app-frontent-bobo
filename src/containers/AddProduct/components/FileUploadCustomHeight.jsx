import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderDropZoneField from '../../../shared/components/form/DropZone';

const FileUploadCustomHeight = ({ handleSubmit, reset }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Bulk Upload</h3>
            <h5 className="subhead">Text despre proces
              <span className="red-text"> pls Andrei me no brain left for this....</span>
            </h5>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <Field
              name="files"
              component={renderDropZoneField}
              customHeight
            />
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

FileUploadCustomHeight.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'file_upload_custom_height', // a unique identifier for this form
})(FileUploadCustomHeight);
