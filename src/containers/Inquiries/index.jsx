import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BoxedCollapseFullWidth from './components/BoxedCollapseFullWidth';
import LabelPanelDivider from './components/LabelPanelDivider';

const Collapse = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <BoxedCollapseFullWidth />
        <LabelPanelDivider />
      </Row>
    </Container>
  );
};

export default Collapse;