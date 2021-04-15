
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import AnimatedLineFormWithLabels from './components/AnimatedLineFormWithLabels';
import FileUploadCustomHeight from './components/FileUploadCustomHeight';
import HorizontalForm from './components/HorizontalForm';
import showResults from './Show';

const FloatingLabelsForm = () => {

  return (
    <Container>
      <Row>
        {/* <AnimatedLineFormWithLabels onSubmit={showResults} /> */}
        <HorizontalForm onSubmit={showResults} />
        <FileUploadCustomHeight onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FloatingLabelsForm;